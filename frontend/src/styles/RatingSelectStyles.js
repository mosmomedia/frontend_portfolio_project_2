import tw, { styled } from 'twin.macro';

export const RatingWrapper = styled.ul`
	${tw`flex justify-around items-center mt-10 mb-10`}
`;

export const RatingNumStyles = styled.li`
	${tw`relative bg-[#f4f4f4] w-8 h-8  text-center rounded-full text-base delay-100 hover:bg-keyColor hover:text-white sm:w-10 sm:h-10 md:w-14 md:h-14`}
`;

export const RatingInputStyles = styled.input`
	${tw`opacity-0`}
`;

export const RatingLabelStyles = styled.label`
	${tw`absolute top-1/2 left-1/2 w-8 h-8 cursor-pointer -translate-x-1/2 -translate-y-1/2 p-1  rounded-full text-base peer-checked:bg-keyColor peer-checked:text-white sm:p-2 sm:w-10 sm:h-10  md:p-3.5 md:w-14 md:h-14 md:text-lg`}
`;

export const RatingBtnStyles = styled.button`
	${tw`absolute top-2 right-2 text-xl`}

	svg {
		${({ is_close_btn }) =>
			is_close_btn && tw`text-pink-400 hover:text-red-800`}
	}
`;
