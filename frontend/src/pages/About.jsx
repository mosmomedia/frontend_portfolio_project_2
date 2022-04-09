import Card from '../shared/Card';
import { Link } from 'react-router-dom';
import 'twin.macro';
import 'styled-components/macro';

function About() {
	return (
		<Card>
			<div tw="space-y-2">
				<h1 tw="mb-10">About This Project</h1>
				<p>This is a React app to leave feedback for a product or service</p>
				<p>
					This is the project based from one of bradtraversy's udemy courses,
					"React Front To Back 2022".
				</p>
				<p>Version: 0.1.0</p>
			</div>
			<div tw="mt-10">
				<Link
					to="/"
					tw="text-blue-600 text-xl cursor-pointer hover:font-semibold"
				>
					Back To Home
				</Link>
			</div>
		</Card>
	);
}

export default About;
