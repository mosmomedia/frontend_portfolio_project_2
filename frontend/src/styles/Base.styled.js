import tw from 'twin.macro';
import { createGlobalStyle } from 'styled-components';

const StyleBase = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

* {
	${tw`box-border`}
}

body {
	font-family: 'Poppins', sans-serif;
	${tw`bg-body text-white text-base`}
}

a {
	${tw`block no-underline`}
}

	.bred {
		border: 1px solid rgba(255, 0, 0, 0.4);
	}

	.input {
		box-shadow: rgba(0, 0, 0, 0.11);
		border: none;
		background: #fff;
		color: #000;
		border-radius: 0.25rem;
		height: 3rem;
		width: 100%;
		outline: none;
		padding: 0 3rem;
		font-size: 1rem;
		margin: 1rem 0;
	}

	.loadingSpinnerContainer {
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background-color: rgba(0, 0, 0, 0.2);
		z-index: 5000;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.loadingSpinner {
		width: 64px;
		height: 64px;
		border: 8px solid;
		border-color: #000 transparent #555 transparent;
		border-radius: 50%;
		animation: spin 1.2s linear infinite;
	}

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}

`;

export default StyleBase;
