import { useState } from 'react';
import Card from '../../shared/Card';
import RatingSelect from './RatingSelect';

function FeedbackForm() {
	const [text, setText] = useState('');
	const [rating, setRating] = useState(10);
	const [isDisabled, setIsDisabled] = useState(true);
	const [message, setMessage] = useState('');

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

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(text, rating);
	};
	return (
		<>
			<Card>
				<form onSubmit={handleSubmit}>
					<h2 className="text-2xl">How would you rate your service with us?</h2>
					<RatingSelect rating={rating} setRating={setRating} />
					<div className="flex border-solid border-[1px] border-[#ccc] rounded-lg py-2 px-3 ">
						<input
							className=" text-lg flex-grow focus:outline-none "
							type="text"
							value={text}
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

export default FeedbackForm;
