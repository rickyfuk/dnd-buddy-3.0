// Main server
// Get the express dependencies
const express = require('express');
// express-session for controlling the validality of the login session
const session = require('express-session');

const dbConnection = require('./database'); 
const MongoStore = require('connect-mongo')(session);
const bodyParser = require('body-parser')
const morgan = require('morgan')
// Requiring passport from the passport-config.js
// (no need for require passport directly as the module export by passport-config has included passport module)
const passport = require('./passport/index');
// Get the secertsession from env by config.js
const config = require('./config/config');
// Sets up the Express App and PORT for Frontend
//routes is for sequelize db
const routes = require('./controllers');

//user is for mongo db
const user = require('./routes/index');

const app = express();
const PORT = process.env.PORT || 3001;

// Requiring our models for syncing
const db = require('./models');
require('dotenv').config();

// MIDDLEWARE
app.use(morgan('dev'))
app.use(
	bodyParser.urlencoded({
		extended: false
	})
)
app.use(bodyParser.json())

// Sets up the Express app to handle data parsing
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// Static directory
if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
  }

// (standard requirment for using passport module)
// the sessions moduel for keeping track of our user's login status
// app.use(
// 	session({
// 		// secret: config.sessionSecret,
// 		secret: "keyboard cat",
// 		resave: true,
// 		saveUninitialized: true,
// 	})
// );

// Sessions
app.use(
	session({
		secret: 'fraggle-rock', //pick a random string to make the hash that is generated secure
		store: new MongoStore({ mongooseConnection: dbConnection }),
		resave: false, //required
		saveUninitialized: false //required
	})
);


// Routes
app.use(routes);
app.use('/user', user);
app.use(passport.initialize());
app.use(passport.session());

// Set the route
// const htmlRoute = require('./controllers/htmlRoute');
// const apiRoute = require('./controllers/apiRoute');

// app.use(apiRoute);



// console.log(routes);
// console.log(apiRoute);


// app.get("*", function(req, res) {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });
// console.log(process.env.JAWSUSERNAME);
// console.log(process.env.JAWSPASSWORD);
// console.log(process.env.DATABASE);


// sync the sequelize model
// 1. force has set to "false" to stop dropping the table when the server restart
db.sequelize.sync({ force: false }).then(function () {
	app.listen(PORT, function () {
		console.log('App listening on PORT ' + PORT);
	});
});
