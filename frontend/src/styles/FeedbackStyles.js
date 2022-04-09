import tw, { styled } from 'twin.macro';

export const FormStyles = styled.form`
	h2 {
		${tw`text-2xl`}
	}
`;
export const SubmitStyles = styled.div`
	${tw`flex border-solid border-[1px] border-[#ccc] rounded-lg py-2 px-3`}
`;
export const InputStyles = styled.input`
	${tw`text-lg flex-grow focus:outline-none`}
`;
export const ButtonStyles = styled.button`
	${tw`w-24 h-10 cursor-pointer rounded-lg bg-gray-300 text-gray-400`}

	${({ is_disabled }) => !is_disabled && tw`bg-keyColor text-white`}
`;

export const MessageStyles = styled.p`
	${tw`pt-2 text-lg text-center text-purple-800`}
`;

export const ItemRatingStyles = styled.div`
	${tw`absolute  -top-3 -left-5 bg-keyColor text-white w-14 h-14 p-3 text-center rounded-full text-xl border-solid border-[1px]  border-[#eee] delay-300`}
`;

export const ItemTextStyles = styled.div`
	${tw`text-xl text-gray-900 ml-2`}
`;

export const ItemButtonStyles = styled.button`
	${tw`absolute  cursor-pointer bg-none border-none`}

	${({ is_del_btn }) => is_del_btn && tw`top-2 right-2`}
	${({ is_edit_btn }) => is_edit_btn && tw`top-2 right-8`}
`;
