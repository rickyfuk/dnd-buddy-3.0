require('dotenv').config();

const username = process.env.JAWSUSERNAME;
const password = process.env.JAWSPASSWORD;
const database = process.env.DATABASE;
const host = process.env.HOST;
const node_env = process.env.NODE_ENV;
const sessionSecret = process.env.SESSIONSECRET;
const usernamedev = process.env.USERNAME_DEV;
const passworddev = process.env.PASSWORD_DEV;
const databasedev = process.env.DATABASE_DEV;
const hostdev = process.env.HOST_DEV;
// const dialectdev = process.env.dialectdev;
// const session_secret = process.env.SESSION_SECRET;

console.log("2:" + node_env);

const config = {
	dev: {
		node_env: node_env,
		db: {
			usernamedev,
			passworddev,
			databasedev,
			hostdev,
			// dialectdev
		},
		sessionSecret,
	},
	test: {},
	production: {
		node_env: node_env,
		db: {
			username,
			password,
			database,
			host,
		},
		sessionSecret,
	},
};

module.exports = config[node_env];
