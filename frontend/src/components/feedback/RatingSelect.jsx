import 'twin.macro';
import 'styled-components/macro';

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
		<ul className="rating" tw="flex justify-around items-center mt-7 mb-10">
			{Array.from({ length: 10 }, (_, idx) => (
				<li
					tw="relative bg-[#f4f4f4] w-8 h-8  text-center rounded-full text-base delay-100 hover:bg-keyColor hover:text-white sm:w-10 sm:h-10 md:w-14 md:h-14"
					key={idx + 1}
				>
					<input
						className="peer"
						tw="opacity-0"
						type="radio"
						id={`num${idx + 1}`}
						name="rating"
						value={idx + 1}
						checked={rating === idx + 1}
						onChange={handleChange}
					/>
					<label
						htmlFor={`num${idx + 1}`}
						tw="absolute top-1/2 left-1/2 w-8 h-8 cursor-pointer -translate-x-1/2 -translate-y-1/2 p-1  rounded-full text-base peer-checked:bg-keyColor peer-checked:text-white sm:p-2 sm:w-10 sm:h-10  md:p-3.5 md:w-14 md:h-14 md:text-lg"
					>
						{idx + 1}
					</label>
				</li>
			))}
		</ul>
	);
}

export default RatingSelect;
