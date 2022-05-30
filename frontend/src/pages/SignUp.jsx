import { useState } from 'react';
import { Link, useNavigate, Navigate } from 'react-router-dom';

import firebase from '../config/firebase';
import { useAuthContext } from '../contexts/auth/AuthContext';
import OAuth from '../components/OAuth';

import { ReactComponent as ArrowRightIcon } from '../assets/svg/keyboardArrowRightIcon.svg';
import visibilityIcon from '../assets/svg/visibilityIcon.svg';
import { toast } from 'react-toastify';

import {
	Wrapper,
	FormStyles,
	InputStyles,
	ButtonStyles,
	LinkStyles,
} from '../styles/SignFormStyles';

function SignUp() {
	const userState = useAuthContext();

	const [showPassword, setShowPassword] = useState(false);
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
		password2: '',
	});

	const { name, email, password, password2 } = formData;

	const navigate = useNavigate();

	const handleChange = ({ target: { name, value } }) => {
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (password === password2) {
			try {
				const userCred = await firebase.createUserWithEmailAndPassword(
					firebase.auth,
					email,
					password
				);

				const userObjectId = firebase.createMongoObjectId();

				firebase.updateProfile(userCred.user, {
					displayName: name,
				});

				const userProfile = {
					userObjectId,
					name,
					email,
					createdAt: firebase.serverTimestamp(),
				};

				const uid = userCred?.user.uid;

				await firebase.setDoc(
					firebase.doc(firebase.db, 'users', uid),
					userProfile
				);

				toast(`Welcome, ${name}!`);

				navigate('/');
			} catch (error) {
				console.log(error);
				toast.error('Could not authorize');
			}
		} else {
			toast.error('Please Confirm Password');
		}
	};

	if (userState) {
		return <Navigate to="/" replace />;
	}

	return (
		<>
			<Wrapper>
				<header>
					<h2>Welcome!</h2>
				</header>

				<FormStyles onSubmit={handleSubmit}>
					<InputStyles
						type="text"
						className="input"
						placeholder="Name"
						name="name"
						onChange={handleChange}
						value={name}
					/>

					<InputStyles
						type="email"
						name="email"
						className="input"
						placeholder="Email"
						onChange={handleChange}
						value={email}
					/>

					<div className="password">
						<InputStyles
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

					<div className="password">
						<InputStyles
							type="password"
							className="input"
							placeholder="Confirm Password"
							name="password2"
							value={password2}
							onChange={handleChange}
						/>
					</div>

					<ButtonStyles>
						<p>Sign Up</p>
						<ArrowRightIcon fill="#00cc66" width="34px" height="34px" />
					</ButtonStyles>
				</FormStyles>

				<OAuth />

				<LinkStyles>
					<Link
						to="/sign-in"
						className="mt-16 text-lg text-[#00cc66] text-center font-semibold"
					>
						Sign In Instead
					</Link>
				</LinkStyles>
			</Wrapper>
		</>
	);
}

export default SignUp;
