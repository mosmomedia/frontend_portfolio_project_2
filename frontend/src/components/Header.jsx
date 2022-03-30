import { Link } from 'react-router-dom';

function Header() {
	return (
		<header className="bg-black/40 h-20 w-full flex items-center mb-8">
			<div className="max-w-3xl m-auto py-5">
				<Link to="/" className="text-2xl text-[#ff6a95]">
					<h2>Feedback UI</h2>
				</Link>
			</div>
		</header>
	);
}

export default Header;
