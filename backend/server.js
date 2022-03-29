const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const config = require('./config/index');

// connecting mongoDB Atlas
connectDB();

const app = express();

// Routes
app.use('/api/', require('./routes/rootRoutes'));

// local server
app.listen(config.PORT, () =>
	console.log(`Server started on port ${config.PORT}`)
);
