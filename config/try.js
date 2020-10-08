require('dotenv').config();

const username = process.env.JAWSUSERNAME;
const password = process.env.JAWSPASSWORD;
const database = process.env.DATABASE;
const host = process.env.HOST;
// const session_secret = process.env.SESSION_SECRET;

// const config = {
// 	dev: {
// 		node_env: node_env,
// 		db: {
// 			username,
// 			password,
// 			database,
// 			host,
// 		},
// 		// session_secret,
// 	},
// 	test: {},
// 	prod: {},
// };

// module.exports = config[node_env];

const fs = require('fs');

module.exports = {
	development: {
		username: username,
		password: password,
		database: database,
		host: host,
		port: 3306,
		dialect: 'mysql',
		dialectOptions: {
			bigNumberStrings: true,
		},
	},
	test: {
		username: username,
		password: password,
		database: database,
		host: host,
		port: 3306,
		dialect: 'mysql',
		dialectOptions: {
			bigNumberStrings: true,
		},
	},
	production: {
		username: username,
		password: password,
		database: database,
		host: host,
		port: 3306,
		dialect: 'mysql',
		dialectOptions: {
			bigNumberStrings: true,
		},
	},
};
