function RatingSelect({ rating, setRating, user, setMessage }) {
	const handleChange = ({ target: { value } }) => {
		if (!user) {
			setMessage('Please Login First..');
			setTimeout(() => {
				setMessage('');
			}, 1500);
		} else {
			setRating(+value);
		}
	};
	return (
		<ul className="rating flex justify-around items-center mt-7 mb-10">
			{Array.from({ length: 10 }, (_, idx) => (
				<li
					className=" relative bg-[#f4f4f4] w-14 h-14 text-center p-2 rounded-full text-[1.1875rem] delay-100 hover:bg-[#ff6a95] hover:text-white"
					key={idx + 1}
				>
					<input
						className=" opacity-0 peer"
						type="radio"
						id={`num${idx + 1}`}
						name="rating"
						value={idx + 1}
						checked={rating === idx + 1}
						onChange={handleChange}
					/>
					<label
						htmlFor={`num${idx + 1}`}
						className="absolute top-1/2 left-1/2 w-14 h-14 cursor-pointer -translate-x-1/2 -translate-y-1/2 p-3 rounded-full text-[1.3rem] peer-checked:bg-[#ff6a95] peer-checked:text-white"
					>
						{idx + 1}
					</label>
				</li>
			))}
		</ul>
	);
}

export default RatingSelect;
