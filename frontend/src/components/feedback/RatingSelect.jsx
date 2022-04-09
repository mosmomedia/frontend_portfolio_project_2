import {
	RatingWrapper,
	RatingNumStyles,
	RatingInputStyles,
	RatingLabelStyles,
} from '../../styles/RatingSelectStyles';

function RatingSelect({ rating, setRating, user, setMessage }) {
	const handleChange = ({ target: { value } }) => {
		if (!user) {
			setMessage('Please Login First..');
			setTimeout(() => {
				setMessage('');
			}, 1800);
		} else {
			setRating(+value);
		}
	};
	return (
		<RatingWrapper>
			{Array.from({ length: 10 }, (_, idx) => (
				<RatingNumStyles tw="" key={idx + 1}>
					<RatingInputStyles
						className="peer"
						type="radio"
						id={`num${idx + 1}`}
						name="rating"
						value={idx + 1}
						checked={rating === idx + 1}
						onChange={handleChange}
					/>
					<RatingLabelStyles htmlFor={`num${idx + 1}`}>
						{idx + 1}
					</RatingLabelStyles>
				</RatingNumStyles>
			))}
		</RatingWrapper>
	);
}

export default RatingSelect;
