const User = require('../database/models/user')
const LocalStrategy = require('passport-local').Strategy

const strategy = new LocalStrategy(
	{
		usernameField: 'email' // not necessary, DEFAULT
	},
	function(username, password, done) {
		console.log("local strategy test");
		User.findOne({ email: username }, (err, user) => {
			if (err) {
				console.log("done err");
				return done(err) 
			}
			if (!user) {
				console.log("incorrect email");
				return done(null, false, { message: 'Incorrect email' })
			}
			if (!user.checkPassword(password)) {
				console.log("wrong password");
				return done(null, false, { message: 'Incorrect password' })
			}
			console.log("alright!");
			return done(null, user)
		})
	}
)

module.exports = strategy