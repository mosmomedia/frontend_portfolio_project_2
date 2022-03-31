import { useState } from 'react';
import { Link, useNavigate, Navigate } from 'react-router-dom';

import firebase from '../config/firebase';
import { useAuthContext } from '../contexts/auth/AuthContext';

import { ReactComponent as ArrowRightIcon } from '../assets/svg/keyboardArrowRightIcon.svg';
import visibilityIcon from '../assets/svg/visibilityIcon.svg';
import { toast } from 'react-toastify';

function SignUp() {
	const userState = useAuthContext();

	const [showPassword, setShowPassword] = useState(false);
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
	});

	const { name, email, password } = formData;

	const navigate = useNavigate();

	const handleChange = ({ target: { name, value } }) => {
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const userCred = await firebase.createUserWithEmailAndPassword(
				firebase.auth,
				email,
				password
			);

			const userObjectId = firebase.createMongoObjectId();

			firebase.updateProfile(firebase.auth.currentUser, {
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
	};

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
						type="text"
						className="input"
						placeholder="Name"
						name="name"
						onChange={handleChange}
						value={name}
					/>

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
						<p className="text-2xl ">Sign Up</p>
						<button className="signUpButton">
							<ArrowRightIcon fill="#ffffff" width="34px" height="34px" />
						</button>
					</div>
				</form>

				{/* <OAuth /> */}

				<Link
					to="/sign-in"
					className="mt-16 text-lg text-[#00cc66] text-center font-semibold"
				>
					Sign In Instead
				</Link>
			</div>
		</>
	);
}

export default SignUp;
