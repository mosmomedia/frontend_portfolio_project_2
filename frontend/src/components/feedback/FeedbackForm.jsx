import { useState, useRef } from 'react';
import Card from '../../shared/Card';
import RatingSelect from './RatingSelect';

import { createFeedback } from '../../contexts/feedback/FeedbackAction';
import { useFeedbackContext } from '../../contexts/feedback/FeedbackContext';
import { useAuthContext } from '../../contexts/auth/AuthContext';

import {
	FormStyles,
	SubmitStyles,
	InputStyles,
	ButtonStyles,
	MessageStyles,
} from '../../styles/FeedbackStyles';

import { toast } from 'react-toastify';

function FeedbackEditForm() {
	const { feedbackList, dispatch } = useFeedbackContext();
	const user = useAuthContext();
	const [text, setText] = useState('');
	const [rating, setRating] = useState(10);
	const [isDisabled, setIsDisabled] = useState(true);
	const [message, setMessage] = useState('');

	const inputRef = useRef();

	const handleFocus = () => {
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
				<FormStyles onSubmit={handleSubmit}>
					<h2>How would you rate your service with us?</h2>
					<RatingSelect
						rating={rating}
						setRating={setRating}
						user={user}
						setMessage={setMessage}
					/>
					<SubmitStyles>
						<InputStyles
							type="text"
							value={text}
							onFocus={handleFocus}
							ref={inputRef}
							onChange={handleChange}
							placeholder="Write a review"
						/>
						<ButtonStyles
							is_disabled={isDisabled}
							type="submit"
							disabled={isDisabled}
						>
							Send
						</ButtonStyles>
					</SubmitStyles>
					{message && <MessageStyles>{message}</MessageStyles>}
				</FormStyles>
			</Card>
		</>
	);
}

export default FeedbackEditForm;
