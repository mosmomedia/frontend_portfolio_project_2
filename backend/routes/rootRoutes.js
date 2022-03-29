const express = require('express');
const router = express.Router();
//todo import contoroller

// todo import authmiddleware

// check routing
router.route('/').get((req, res) => {
	res.status(200).json({ msg: 'Success' });
});

module.exports = router;
