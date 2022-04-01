import { useState } from 'react';
import { useFeedbackContext } from '../../contexts/feedback/FeedbackContext';

import { updateFeedback } from '../../contexts/feedback/FeedbackAction';

import Modal from 'react-modal';
import { FaTimes } from 'react-icons/fa';
import { toast } from 'react-toastify';
import Spinner from '../../shared/Spinner';

const customStyles = {
	overlay: {
		position: 'fixed',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		backgroundColor: 'rgba(0, 0, 0, 0.6)',
	},
	content: {
		width: '80%',
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
		position: 'relative',
		background: '#fff',
		color: '#000',
	},
};

Modal.setAppElement('#root');

function FeedbackEditForm() {
	const { feedbackList, currentFeedback, editMode, dispatch } =
		useFeedbackContext();
	const [text, setText] = useState(currentFeedback.text);
	const [rating, setRating] = useState(currentFeedback.rating);
	const [isDisabled, setIsDisabled] = useState(true);
	const [message, setMessage] = useState('');
	const [loading, setLoading] = useState(false);
	const handleTextChange = ({ target: { value } }) => {
		if (value === '') {
			setMessage('Text must be at least 10 characters..');
			setIsDisabled(true);
		} else if (value.length < 10) {
			setIsDisabled(true);
			setMessage('Text must be at least 10 characters..');
		} else {
			setMessage('');
			setIsDisabled(false);
		}
		setText(value);
	};

	const handleRatingChange = ({ target: { value } }) => {
		setRating(+value);
		setIsDisabled(false);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		const formData = { text, rating };
		const updatedFeedback = await updateFeedback(formData, currentFeedback._id);
		const payload = feedbackList.map((item) => {
			if (item._id === currentFeedback._id) {
				return updatedFeedback;
			} else {
				return item;
			}
		});

		dispatch({ type: 'UPDATE_FEEDBACK', payload });
		setLoading(false);
		toast.success('Item Updated!');
		closeModal();
	};

	const closeModal = () => {
		dispatch({ type: 'OFF_EDITMODE' });
	};

	if (loading) {
		return <Spinner />;
	}

	return (
		<Modal
			isOpen={editMode}
			style={customStyles}
			contentLabel="Edit Feedback"
			onRequestClose={closeModal}
		>
			<h2 className="text-xl mb-4">Edit Feedback</h2>
			<button className="absolute top-2 right-2 text-xl " onClick={closeModal}>
				<FaTimes className=" text-pink-400 hover:text-rose-800" />
			</button>

			<form onSubmit={handleSubmit}>
				<ul className="rating flex justify-around items-center mt-7 mb-10">
					{Array.from({ length: 10 }, (_, idx) => (
						<li
							className=" relative bg-[#f4f4f4] w-14 h-14 text-center p-2 rounded-full text-[1.1875rem] delay-100 hover:bg-[#ff6a95] hover:text-white"
							key={idx + 1}
						>
							<input
								className=" opacity-0 peer"
								type="radio"
								id={`edit-num${idx + 1}`}
								name="rating"
								value={idx + 1}
								checked={rating === idx + 1}
								onChange={handleRatingChange}
							/>
							<label
								htmlFor={`edit-num${idx + 1}`}
								className="absolute top-1/2 left-1/2 w-14 h-14 cursor-pointer -translate-x-1/2 -translate-y-1/2 p-3 rounded-full text-[1.3rem] peer-checked:bg-[#ff6a95] peer-checked:text-white"
							>
								{idx + 1}
							</label>
						</li>
					))}
				</ul>
				<div className="flex border-solid border-[1px] border-[#ccc] rounded-lg py-2 px-3 ">
					<input
						className="text-lg flex-grow focus:outline-none "
						type="text"
						value={text}
						onChange={handleTextChange}
						placeholder="Write a review"
					/>
					<button
						className={`w-24 h-10 cursor-pointer rounded-lg ${
							isDisabled
								? ' bg-gray-300 text-gray-400'
								: ' bg-slate-900 text-white'
						}`}
						type="submit"
						disabled={isDisabled}
					>
						Change
					</button>
				</div>
				{message && (
					<p className=" pt-2 text-center text-violet-800">{message}</p>
				)}
			</form>
		</Modal>
	);
}

export default FeedbackEditForm;
