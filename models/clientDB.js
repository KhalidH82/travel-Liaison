/* This module is the interface for the database. It contains
 CRUD methods in SQL to talk to the database.
 Each function returns a promise
 */

const pgp = require('pg-promise')();
const dbConfig = require('../config/dbConfig');

const db = pgp(dbConfig);

module.exports = {

/* This method returns all clients from database and associates type of client with thier clienttag and orders by last name 
*/
	findAll() {
		return db.many(`SELECT * 
						FROM clients
						JOIN typeofclient
						ON clients.clienttag= typeofclient.typeid
						ORDER BY clients.lname`);
	},

/* This method returns one client from database by client id */
	findById(id) {
		return db.one(`SELECT * 
						FROM clients
						JOIN typeofclient
						ON clients.clienttag= typeofclient.typeid WHERE id=$1`, id);
	},

/* This method inserts the correct values and saves client into database */
	save(client) {
		return db.one(`INSERT INTO clients (fname, lname, sex, address, homephone, cellphone, email, dob, clienttag)
						VALUES ($/fname/, $/lname/, $/sex/, $/address/, $/homephone/, $/cellphone/, $/email/, $/dob/, $/clienttag/)
						RETURNING *`, client);
	},

/* This method updates a clients values in database */
	update(client) {
		return db.one(`UPDATE clients
						SET
						fname = $/fname/,
						lname = $/lname/,
						sex = $/sex/,
						address = $/address/,
						homephone = $/homephone/,
						cellphone = $/cellphone/,
						email = $/email/,
						dob = $/dob/,
						clienttag = $/clienttag/
						WHERE id = $/id/
						RETURNING *`, client);
	},

/* This method deletes clients by id */
	destroy(id) {
		return db.none(`DELETE FROM clients
						WHERE id = $1`, id);
	},
};