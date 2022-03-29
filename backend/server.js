const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const config = require('./config/index');

connectDB();

const app = express();

app.listen(config.PORT, () =>
	console.log(`Server started on port ${config.PORT}`)
);
