import tw, { styled } from 'twin.macro';
export const NavbarStyles = styled.footer`
	${tw`fixed left-0 bottom-0 right-0 h-20 bg-white text-[#8f8f8f] z-50 flex justify-center items-center`}

	nav {
		${tw`w-full overflow-y-hidden`}
	}

	ul {
		${tw`m-0 p-0 flex justify-evenly items-center font-semibold`}
	}

	ul li {
		${tw`cursor-pointer`}
	}

	.logout {
		${tw`text-pink-400`}
	}
`;

export const NavItemStyles = styled.p`
	${({ path_name }) => path_name && tw`text-[#2c2c2c]`}
`;
