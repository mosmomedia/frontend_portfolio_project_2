import { useLocation, useNavigate } from 'react-router-dom';
import firebase from '../config/firebase';

import googleIcon from '../assets/svg/googleIcon.svg';
import { toast } from 'react-toastify';
import 'twin.macro';
import 'styled-components/macro';

function OAuth() {
	const location = useLocation();
	const navigate = useNavigate();

	const onGoogleClick = async () => {
		try {
			const provider = new firebase.GoogleAuthProvider();
			const userCred = await firebase.signInWithPopup(firebase.auth, provider);

			const { email, uid, displayName } = userCred.user;

			const docRef = firebase.doc(firebase.db, 'users', uid);
			const docSnap = await firebase.getDoc(docRef);

			let userObjectId;

			if (!docSnap.exists()) {
				userObjectId = firebase.createMongoObjectId();
				await firebase.setDoc(firebase.doc(firebase.db, 'users', uid), {
					name: displayName,
					email,
					userObjectId,
					createdAt: firebase.serverTimestamp(),
				});
			} else {
				userObjectId = docSnap.data().userObjectId;
			}

			toast(`Welcome, ${displayName}`);

			navigate('/');
		} catch (error) {
			toast.error('Could not authorize with Google');
		}
	};

	return (
		<div tw="flex flex-col items-center mt-16">
			<p>Sign {location.pathname === '/sign-up' ? 'up' : 'in'} with </p>
			<button
				tw="cursor-pointer flex justify-center items-center p-3 m-6 w-12 h-12 bg-white  rounded-full  shadow-md"
				onClick={onGoogleClick}
			>
				<img tw="w-full" src={googleIcon} alt="google" />
			</button>
		</div>
	);
}

export default OAuth;
