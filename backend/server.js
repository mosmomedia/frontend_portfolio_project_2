const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
require('dotenv').config();

connectDB();

const app = express();

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
