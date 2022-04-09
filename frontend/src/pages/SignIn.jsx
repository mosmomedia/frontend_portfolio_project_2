import { useState } from 'react';
import { Link, useNavigate, Navigate } from 'react-router-dom';
import firebase from '../config/firebase';

import { useAuthContext } from '../contexts/auth/AuthContext';

import OAuth from '../components/OAuth';

import {
	Wrapper,
	FormStyles,
	InputStyles,
	ButtonStyles,
	LinkStyles,
} from '../styles/SignFormStyles';

import { ReactComponent as ArrowRightIcon } from '../assets/svg/keyboardArrowRightIcon.svg';
import visibilityIcon from '../assets/svg/visibilityIcon.svg';
import { toast } from 'react-toastify';

function SignIn() {
	const [showPassword, setShowPassword] = useState(false);
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
	});

	const userState = useAuthContext();
	const { email, password } = formData;

	const navigate = useNavigate();

	const handleChange = ({ target: { name, value } }) => {
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const userCred = await firebase.signInWithEmailAndPassword(
				firebase.auth,
				email,
				password
			);
			if (userCred.user) {
				const { displayName } = userCred.user;
				toast(`Welcome, ${displayName}!`);
				navigate('/');
			}
		} catch (error) {
			toast.error('Bad User Credentials');
		}
	};

	// To keep the history clean, you should set replace prop. This will avoid extra redirects after the user click back.
	if (userState) {
		return <Navigate to="/" replace />;
	}

	return (
		<>
			<Wrapper>
				<header>
					<h2>Welcome Back!</h2>
				</header>

				<FormStyles onSubmit={handleSubmit}>
					<InputStyles
						type="email"
						name="email"
						placeholder="Email"
						onChange={handleChange}
						value={email}
					/>

					<div className="password">
						<InputStyles
							type={showPassword ? 'text' : 'password'}
							placeholder="Password"
							name="password"
							value={password}
							onChange={handleChange}
						/>

						<img
							src={visibilityIcon}
							alt="show password"
							onClick={() => setShowPassword(!showPassword)}
						/>
					</div>

					<ButtonStyles>
						<p>Sign In</p>
						<button>
							<ArrowRightIcon fill="#00cc66" width="34px" height="34px" />
						</button>
					</ButtonStyles>
				</FormStyles>

				<OAuth />

				<LinkStyles>
					<Link to="/sign-up">Sign Up Instead</Link>
				</LinkStyles>
			</Wrapper>
		</>
	);
}

export default SignIn;
