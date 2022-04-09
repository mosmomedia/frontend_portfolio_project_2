import { useState } from 'react';
import { useFeedbackContext } from '../../contexts/feedback/FeedbackContext';

import { updateFeedback } from '../../contexts/feedback/FeedbackAction';

import Modal from 'react-modal';
import { FaTimes } from 'react-icons/fa';
import { toast } from 'react-toastify';
import Spinner from '../../shared/Spinner';

import {
	ButtonStyles,
	InputStyles,
	SubmitStyles,
	FormStyles,
	MessageStyles,
} from '../../styles/FeedbackStyles';

import {
	RatingWrapper,
	RatingNumStyles,
	RatingInputStyles,
	RatingLabelStyles,
	RatingBtnStyles,
} from '../../styles/RatingSelectStyles';

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
			<h2 className="text-2xl mb-8 ml-2">Edit Feedback</h2>
			<RatingBtnStyles is_close_btn="is_close_btn" onClick={closeModal}>
				<FaTimes className=" text-pink-400 hover:text-rose-800" />
			</RatingBtnStyles>

			<FormStyles onSubmit={handleSubmit}>
				<RatingWrapper className="rating flex justify-around items-center mt-7 mb-10">
					{Array.from({ length: 10 }, (_, idx) => (
						<RatingNumStyles key={idx + 1}>
							<RatingInputStyles
								className="peer"
								type="radio"
								id={`edit-num${idx + 1}`}
								name="rating"
								value={idx + 1}
								checked={rating === idx + 1}
								onChange={handleRatingChange}
							/>
							<RatingLabelStyles htmlFor={`edit-num${idx + 1}`}>
								{idx + 1}
							</RatingLabelStyles>
						</RatingNumStyles>
					))}
				</RatingWrapper>
				<SubmitStyles>
					<InputStyles
						className="text-lg flex-grow focus:outline-none "
						type="text"
						value={text}
						onChange={handleTextChange}
						placeholder="Write a review"
					/>
					<ButtonStyles
						is_disabled={isDisabled}
						type="submit"
						disabled={isDisabled}
					>
						Change
					</ButtonStyles>
				</SubmitStyles>
				{message && <MessageStyles>{message}</MessageStyles>}
			</FormStyles>
		</Modal>
	);
}

export default FeedbackEditForm;
