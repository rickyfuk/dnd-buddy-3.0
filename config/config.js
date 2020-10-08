require('dotenv').config();

const username = process.env.JAWSUSERNAME;
const password = process.env.JAWSPASSWORD;
const database = process.env.DATABASE;
const host = process.env.HOST;
const node_env = process.env.NODE_ENV;
const sessionSecret = process.env.SESSIONSECRET;
// const session_secret = process.env.SESSION_SECRET;

const config = {
	dev: {
		node_env: node_env,
		db: {
			username,
			password,
			database,
			host,
		},
		sessionSecret,
	},
	test: {},
	prod: {},
};

module.exports = config[node_env];
