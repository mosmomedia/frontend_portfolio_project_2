import 'twin.macro';
import 'styled-components/macro';

function Card({ children }) {
	return (
		<div tw="mx-auto w-[95%] max-w-3xl relative bg-white text-[#333] rounded-xl py-8 px-10 my-5 ">
			{children}
		</div>
	);
}

export default Card;
