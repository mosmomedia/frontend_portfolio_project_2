import tw from 'twin.macro';

const LoadingContainerStyles = tw.div`
fixed top-0 right-0 bottom-0 left-0 bg-[rgba(0, 0, 0, 0.2)] z-50 flex justify-center items-center
`;

const SpinnerStyles = tw.div`
w-16 h-16 border-8 border-solid border-l-black border-b-transparent  border-r-gray-500 border-t-transparent  rounded-full animate-spin
`;

function Spinner() {
	return (
		<LoadingContainerStyles>
			<SpinnerStyles />
		</LoadingContainerStyles>
	);
}

export default Spinner;
