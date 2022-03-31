import Card from '../shared/Card';
import { Link } from 'react-router-dom';

function About() {
	return (
		<Card>
			<div className="">
				<h1 className="text-2xl mb-3">About This Project</h1>
				<p className="my-2">
					This is a React app to leave feedback for a product or service
				</p>
				<p className="my-2">Version: 1.0.0</p>
				<Link
					to="/"
					className="mt-10 text-sky-700 text-xl cursor-pointer hover:font-semibold"
				>
					Back To Home
				</Link>
			</div>
		</Card>
	);
}

export default About;
