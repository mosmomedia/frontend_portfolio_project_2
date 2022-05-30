import tw, { styled } from 'twin.macro';

export const Wrapper = styled.div`
	${tw`max-w-xl mx-auto space-y-10 px-5`}
`;

export const FormStyles = styled.form`
	${tw`space-y-5 `}

	.password {
		${tw`relative`}
	}

	.password img {
		${tw`absolute cursor-pointer top-3 right-1.5`}
	}
`;

export const InputStyles = styled.input`
	${tw`shadow border-0 rounded-md outline-none px-5 text-base bg-white text-black h-12 w-full `}/*  */
`;

export const ButtonStyles = styled.button`
	${tw`flex items-center`}

	p {
		${tw`text-xl text-[#00cc66]`}
	}
`;

export const LinkStyles = styled.div`
	${tw`text-lg text-[#00cc66] text-center font-semibold`}
`;
