const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const config = require('./config/index');

// connecting mongoDB Atlas
connectDB();

const app = express();

app.use(cors());

// body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api/feedback', require('./routes/feedbackRoutes'));

// todo errorMiddleware

// local server
app.listen(config.PORT, () =>
	console.log(`Server started on port ${config.PORT}`)
);
