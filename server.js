require('dotenv').config()

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const gr8Controller = require('./controllers/gr8.js');
const MONGODB_URI = process.env.MONGODB_URI;

// Database Configuration
mongoose.connect(MONGODB_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

// Database Connection Error / Success
const db = mongoose.connection;
db.on('error', (err) => console.log(err.message + ' is mongod not running?'));
db.on('connected', () => console.log('mongo connected'));
db.on('disconnected', () => console.log('mongo disconnected'));


// Middleware
// // Body parser middleware: give us access to req.body
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(methodOverride('_method'));

// Routes / Controllers
app.use(gr8Controller);

app.listen(process.env.PORT || 3000)