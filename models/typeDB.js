/* This module is the interface for the database. It contains
 CRUD methods in SQL to talk to the database.
 Each function returns a promise
 */

const pgp = require('pg-promise')();
const dbConfig = require('../config/dbConfig');

const db = pgp(dbConfig);

module.exports = {

/* This method returns all types of clients */
	findAll() {
		return db.many(`SELECT * FROM typeofclient`);
	},
};