const pgp = require('pg-promise')();
const dbConfig = require('../config/dbConfig');

const db = pgp(dbConfig);

module.exports = {

	findAll() {
		return db.many(`SELECT * FROM typeofclient`);
	},
};