import { initializeApp } from 'firebase/app';
import {
	getFirestore,
	doc,
	setDoc,
	getDoc,
	collection,
	serverTimestamp,
} from 'firebase/firestore';

import {
	getAuth,
	onAuthStateChanged,
	updateProfile,
	signInWithPopup,
	signInWithEmailAndPassword,
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
} from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyAidCYJoMIAlMzC9593NteXrpV9Cmz-DNE',
	authDomain: 'mernwithfireauth.firebaseapp.com',
	projectId: 'mernwithfireauth',
	storageBucket: 'mernwithfireauth.appspot.com',
	messagingSenderId: '188317599810',
	appId: '1:188317599810:web:46e88a088a146cc80ac5db',
};

const createMongoObjectId = function () {
	const timestamp = ((new Date().getTime() / 1000) | 0).toString(16);
	return (
		timestamp +
		'xxxxxxxxxxxxxxxx'
			.replace(/[x]/g, function () {
				return ((Math.random() * 16) | 0).toString(16);
			})
			.toLowerCase()
	);
};

// Initialize Firebase
initializeApp(firebaseConfig);

const auth = getAuth();
const db = getFirestore();

const firebase = {
	auth,
	db,
	onAuthStateChanged,
	updateProfile,
	signInWithPopup,
	signInWithEmailAndPassword,
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	createMongoObjectId,
	doc,
	setDoc,
	getDoc,
	collection,
	serverTimestamp,
};

export default firebase;
