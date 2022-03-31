const express = require('express');
const router = express.Router();

const {
	getAllFeedback,
	createFeedback,
	updateFeedback,
	deleteFeedback,
} = require('../controllers/feedbackController');

const authMiddleware = require('../middleware/authMiddleware');

// check routing
router.route('/').get(getAllFeedback).post(authMiddleware, createFeedback);
router
	.route('/:id')
	.put(authMiddleware, updateFeedback)
	.delete(authMiddleware, deleteFeedback);

module.exports = router;
