import { useState } from 'react';
import { Link, useNavigate, Navigate } from 'react-router-dom';
import firebase from '../config/firebase';

import { useAuthContext } from '../contexts/auth/AuthContext';

import OAuth from '../components/OAuth';

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
			<div className="">
				<header>
					<p className="text-2xl">Welcome Back!</p>
				</header>

				<form onSubmit={handleSubmit}>
					<input
						type="email"
						name="email"
						className="input"
						placeholder="Email"
						onChange={handleChange}
						value={email}
					/>

					<div className="relative">
						<input
							type={showPassword ? 'text' : 'password'}
							className="input"
							placeholder="Password"
							name="password"
							value={password}
							onChange={handleChange}
						/>

						<img
							src={visibilityIcon}
							alt="show password"
							className="cursor-pointer absolute top-7 right-2"
							onClick={() => setShowPassword(!showPassword)}
						/>
					</div>

					<div className="mt-12 flex items-center">
						<p className="text-2xl ">Sign In</p>
						<button className="signUpButton">
							<ArrowRightIcon fill="#ffffff" width="34px" height="34px" />
						</button>
					</div>
				</form>

				<OAuth />

				<Link
					to="/sign-up"
					className="mt-16 text-lg text-[#00cc66] text-center font-semibold"
				>
					Sign Up Instead
				</Link>
			</div>
		</>
	);
}

export default SignIn;
