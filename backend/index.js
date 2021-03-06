const { version } = require('./constants');
const routes = require('./routes/routes');
const express = require('express');
const app = express();

const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');

require('dotenv').config({ path: './config/config.env' });

const connectDB = require('./config/db');
connectDB();

// mentioning the port for backend
const port = process.env.PORT || 3001;

// api security
app.use(helmet());

// handle cors
app.use(cors());

// using parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// for better logging
app.use(morgan('combined'));

// ------------------------ main stuff here ----------------------- //

app.use(version, routes);

// listening to the main port
const server = app.listen(port, () => {
	console.log(`API is ready on http://localhost:${port}`);
});

// handling rejections
process.on('unhandledRejection', (err, promise) => {
	console.log(`Error - ${err?.message}`);

	server.close(() => process.exit(1));
});
