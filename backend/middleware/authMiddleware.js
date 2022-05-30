const firebaseAdmin = require('../config/firebase');
const asyncHandler = require('express-async-handler');

const authmiddleware = asyncHandler(async (req, res, next) => {
	let firebaseToken;

	if (
		req.headers.authorization &&
		req.headers.authorization.startsWith('Bearer')
	) {
		try {
			firebaseToken = req.headers.authorization.split(' ')[1];

			let fireaseUser;

			// decode
			if (firebaseToken) {
				fireaseUser = await firebaseAdmin.auth.verifyIdToken(firebaseToken);
			}

			const docSnap = await firebaseAdmin.db
				.collection('users')
				.doc(fireaseUser.uid)
				.get();

			if (docSnap.exists) {
				const userDB_firestore = docSnap.data();
				req.user = { ...userDB_firestore, uid: fireaseUser.uid };
			}

			next();
		} catch (error) {
			res.status(401);
			throw new Error('Unauthorized');
		}
	}

	if (!firebaseToken) {
		res.status(401);
		throw new Error('Unauthorized');
	}
});

module.exports = authmiddleware;
