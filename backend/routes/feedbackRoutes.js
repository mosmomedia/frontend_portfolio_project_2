const express = require('express');
const router = express.Router();

const {
	getAllFeedback,
	createFeedback,
} = require('../controllers/feedbackController');

const authMiddleware = require('../middleware/authMiddleware');

// check routing
router
	.route('/')
	.get(authMiddleware, getAllFeedback)
	.post(authMiddleware, createFeedback);

module.exports = router;
