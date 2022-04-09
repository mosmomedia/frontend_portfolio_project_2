import tw from 'twin.macro';
import { createGlobalStyle } from 'styled-components';

const BaseStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

* {
	${tw`box-border`}
}

body {
	font-family: 'Poppins', sans-serif;
	${tw`bg-body text-white text-base`}
}

h1{
	${tw`text-2xl`}
}

h2{
	${tw`text-xl`}
}

p{
	${tw`text-base`}
}

a {
	${tw` no-underline`}
}
`;

export default BaseStyles;
