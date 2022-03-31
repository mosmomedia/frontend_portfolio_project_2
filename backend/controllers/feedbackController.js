const Feedback = require('../models/feedbackModel');

const asyncHandler = require('express-async-handler');

// get all feedback
const getAllFeedback = (req, res) => {
	res.status(200).send(req.user);
};

// create a feedback
const createFeedback = asyncHandler(async (req, res) => {
	console.log(req.user);
	console.log(req);
	res.status(200).send(req.body);
});

module.exports = {
	getAllFeedback,
	createFeedback,
};
