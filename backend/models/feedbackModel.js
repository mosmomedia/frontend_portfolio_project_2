const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema(
	{
		userRef: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
		},
		userFirebase: {
			type: String,
			required: true,
		},
		rating: {
			type: Number,
			required: true,
		},
		text: {
			type: String,
			required: true,
		},
		userName: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model('Feedback', feedbackSchema);
