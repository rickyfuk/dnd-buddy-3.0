'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
// const env = process.env.NODE_ENV || "development";
// const config = require(__dirname + '/../config/config.json')[env];
// const config = require(__dirname + '/../config/config.js');
const config = require('../config/config.js');
const db = {};

// console.log(env);
console.log(config);

// if (config.node_env === 'dev') console.log(config);
// if (config === "undefined")

// const sequelize = config.use_env_variable
//   ? new Sequelize(process.env[config.use_env_variable])
//   : new Sequelize(config.database, config.username, config.password, config);
if (process.env.NODE_ENV === "dev") {
	var sequelize = new Sequelize (
		config.db.databasedev,	
		config.db.usernamedev,	
		config.db.passworddev,	
		{		
				dialect: 'mysql',		
				host: config.db.hostdev,		
				// logging: false,	
		}
	);
	} else {
		 var sequelize = new Sequelize (
			config.db.database,	
			config.db.username,	
			config.db.password,	
			{		
					dialect: 'mysql',		
					host: config.db.host,		
					// logging: false,	
			}
		);
};

fs.readdirSync(__dirname)
	.filter((file) => {
		return (
			file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
		);
	})
	.forEach((file) => {
		const model = require(path.join(__dirname, file))(
			sequelize,
			Sequelize.DataTypes
		);
		db[model.name] = model;
	});

Object.keys(db).forEach((modelName) => {
	if (db[modelName].associate) {
		db[modelName].associate(db);
	}
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

sequelize
	.authenticate()
	.then(() => {
		console.log('Connection has been established successfully.');
	})
	.catch((err) => {
		console.error('Unable to connect to the database:', err);
	});

module.exports = db;
