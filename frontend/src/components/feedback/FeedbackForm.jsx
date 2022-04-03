import { useState, useRef } from 'react';
import Card from '../../shared/Card';
import RatingSelect from './RatingSelect';

import { createFeedback } from '../../contexts/feedback/FeedbackAction';
import { useFeedbackContext } from '../../contexts/feedback/FeedbackContext';
import { useAuthContext } from '../../contexts/auth/AuthContext';

import { toast } from 'react-toastify';

function FeedbackEditForm() {
	const { feedbackList, dispatch } = useFeedbackContext();
	const user = useAuthContext();
	const [text, setText] = useState('');
	const [rating, setRating] = useState(10);
	const [isDisabled, setIsDisabled] = useState(true);
	const [message, setMessage] = useState('');

	const inputRef = useRef();

	const handleFocus = (e) => {
		if (!user) {
			setMessage('Please Login First..');
			inputRef.current.blur();
			setTimeout(() => {
				setMessage('');
			}, 1500);
		}
	};

	const handleChange = ({ target: { value } }) => {
		if (value === '') {
			setIsDisabled(true);
			setMessage('');
		} else if (value.length < 10) {
			setIsDisabled(true);
			setMessage('Text must be at least 10 characters..');
		} else {
			setIsDisabled(false);
			setMessage('');
		}
		setText(value);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const formData = { rating, text };
		const newFeedback = await createFeedback(formData);
		const payload = [newFeedback, ...feedbackList];
		dispatch({ type: 'CREATE_FEEDBACK', payload });
		toast.success('New Feedback Added!');
		setText('');
		setRating(10);
	};
	return (
		<>
			<Card>
				<form onSubmit={handleSubmit}>
					<h2 className="text-2xl">How would you rate your service with us?</h2>
					<RatingSelect
						rating={rating}
						setRating={setRating}
						user={user}
						setMessage={setMessage}
					/>
					<div className="flex border-solid border-[1px] border-[#ccc] rounded-lg py-2 px-3 ">
						<input
							className="text-lg flex-grow focus:outline-none "
							type="text"
							value={text}
							onFocus={handleFocus}
							ref={inputRef}
							onChange={handleChange}
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
							Send
						</button>
					</div>
					{message && (
						<p className=" pt-2 text-center text-violet-800">{message}</p>
					)}
				</form>
			</Card>
		</>
	);
}

export default FeedbackEditForm;
