import { Link } from 'react-router-dom';
import 'twin.macro';
import 'styled-components/macro';

function Header() {
	return (
		<header tw="bg-black/40 h-20 w-full flex items-center mb-8">
			<div tw="max-w-3xl m-auto py-5">
				<Link to="/" tw="text-2xl text-keyColor">
					<h2>Feedback UI</h2>
				</Link>
			</div>
		</header>
	);
}

export default Header;
