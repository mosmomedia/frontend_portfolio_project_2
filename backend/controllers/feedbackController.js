const Feedback = require('../models/feedbackModel');
const firebaseAdmin = require('../config/firebase');

const asyncHandler = require('express-async-handler');

//@ get all feedback
//@ GET /api/feedback
//@ Public

const getAllFeedback = asyncHandler(async (req, res) => {
	try {
		const allFeedback = await Feedback.find().sort({ updatedAt: -1 });
		res.status(200).json(allFeedback);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
});

//@ create a feedback
//@ POST /api/feedback
//@ Private

const createFeedback = asyncHandler(async (req, res) => {
	const { rating, text } = req.body;
	const { name, userObjectId, uid } = req.user;

	const feedback = await Feedback.create({
		rating,
		text,
		userName: name,
		userRef: userObjectId,
		userFirebase: uid,
	});

	res.status(200).json(feedback);
});

//@ update a feedback
//@ PUT /api/feedback
//@ Private

const updateFeedback = asyncHandler(async (req, res) => {
	const { id } = req.params;

	if (!id) {
		res.status(400);
		throw new Error('ID not found ');
	}

	const user = await firebaseAdmin.db
		.collection('users')
		.doc(req.user.uid)
		.get();

	if (!user.exists) {
		res.status(401);
		throw new Error('User not found');
	}

	const feedback = await Feedback.findById(id);

	if (!feedback) {
		res.status(404);
		throw new Error('feedback not found');
	}

	if (feedback.userRef.toString() !== req.user.userObjectId) {
		res.status(401);
		throw new Error('Not Authorized');
	}

	const updatedFeedback = await Feedback.findByIdAndUpdate(id, req.body, {
		new: true,
	});

	res.status(200).json(updatedFeedback);
});

//@ delete a feedback
//@ DELETE /api/feedback
//@ Private

const deleteFeedback = asyncHandler(async (req, res) => {
	const { id } = req.params;

	if (!id) {
		res.status(400);
		throw new Error('ID not found ');
	}

	const user = await firebaseAdmin.db
		.collection('users')
		.doc(req.user.uid)
		.get();

	if (!user.exists) {
		res.status(401);
		throw new Error('User not found');
	}

	const feedback = await Feedback.findById(id);

	if (!feedback) {
		res.status(404);
		throw new Error('feedback not found');
	}

	if (feedback.userRef.toString() !== req.user.userObjectId) {
		res.status(401);
		throw new Error('Not Authorized');
	}

	await feedback.remove();

	res.status(200).json({ success: true });
});

module.exports = {
	getAllFeedback,
	createFeedback,
	updateFeedback,
	deleteFeedback,
};
