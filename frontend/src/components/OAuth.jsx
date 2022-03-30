import { useLocation, useNavigate } from 'react-router-dom';
import firebase from '../config/firebase';

import googleIcon from '../assets/svg/googleIcon.svg';
import { toast } from 'react-toastify';

function OAuth() {
	const location = useLocation();
	const navigate = useNavigate();

	const onGoogleClick = async () => {
		try {
			const provider = new firebase.GoogleAuthProvider();
			const userCred = await firebase.signInWithPopup(
				firebase.getAuth(),
				provider
			);

			const { email, uid, displayName } = userCred.user;

			const docRef = firebase.doc(firebase.getFirestore(), 'users', uid);
			const docSnap = await firebase.getDoc(docRef);

			let userObjectId;

			if (!docSnap.exists()) {
				userObjectId = firebase.createMongoObjectId();
				await firebase.setDoc(
					firebase.doc(firebase.getFirestore(), 'users', uid),
					{
						name: displayName,
						email,
						userObjectId,
						createdAt: firebase.serverTimestamp(),
					}
				);
			} else {
				userObjectId = docSnap.data().userObject;
			}

			const user = { email, name: displayName, uid, userObjectId };

			localStorage.setItem('user', JSON.stringify(user));

			//todo dispatch

			toast(`Welcome, ${displayName}`);

			navigate('/');
		} catch (error) {
			toast.error('Could not authorize with Google');
		}
	};

	return (
		<div className="flex flex-col items-center mt-16">
			<p>Sign {location.pathname === '/sign-up' ? 'up' : 'in'} with </p>
			<button
				className=" cursor-pointer flex justify-center items-center p-3 m-6 w-12 h-12 bg-white bor rounded-full  shadow-md"
				onClick={onGoogleClick}
			>
				<img className="w-full" src={googleIcon} alt="google" />
			</button>
		</div>
	);
}

export default OAuth;
