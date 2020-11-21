// Main
// Get the express dependencies
const express = require('express');
// express-session for controlling the validality of the login session
const session = require('express-session');

const dbConnection = require('./database');
const MongoStore = require('connect-mongo')(session);
const bodyParser = require('body-parser');
const morgan = require('morgan');
// Requiring passport from the passport-config.js
// (no need for require passport directly as the module export by passport-config has included passport module)
const passport = require('./passport/index');
const path = require('path');

// Get the secertsession from env by config.js
const config = require('./config/config');
// Sets up the Express App and PORT for Frontend
//routes is for sequelize db
//user is for mongo db
const user = require('./routes/index');
const app = express();
const PORT = process.env.PORT || 3001;

// Requiring our models for syncing
require('dotenv').config();

// MIDDLEWARE
app.use(morgan('dev'));
app.use(
	bodyParser.urlencoded({
		extended: false,
	})
);
app.use(bodyParser.json());

// Static directory
// test
if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, 'build')));
	app.get('/', function (req, res) {
	  res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
  };


// Sessions
app.use(
	session({
		secret: 'fraggle-rock', //pick a random string to make the hash that is generated secure
		store: new MongoStore({ mongooseConnection: dbConnection }),
		resave: false, //required
		saveUninitialized: false, //required
	})
);
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/user', user);

// app.get("*", function(req, res) {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });
// console.log(process.env.JAWSUSERNAME);
// console.log(process.env.JAWSPASSWORD);
// console.log(process.env.DATABASE);

app.listen(PORT, function () {
	console.log('App listening on PORT ' + PORT);
});
