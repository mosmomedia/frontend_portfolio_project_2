import { useAuthContext } from '../contexts/auth/AuthContext';

function About() {
	const userState = useAuthContext();
	console.log(userState);
	return <div>About</div>;
}

export default About;
