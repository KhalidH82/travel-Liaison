const pgp = require('pg-promise')();
const dbConfig = require('../config/dbConfig');

const db = pgp(dbConfig);

module.exports = {

	findAll() {
		return db.many(`SELECT * 
						FROM clients
						JOIN typeofclient
						ON clients.clienttag= typeofclient.typeid
						ORDER BY clients.lname`);
	},


	findById(id) {
		return db.one(`SELECT * 
						FROM clients
						JOIN typeofclient
						ON clients.clienttag= typeofclient.typeid WHERE id=$1`, id);
	},

	save(client) {
		return db.one(`INSERT INTO clients (fname, lname, sex, address, homephone, cellphone, email, dob, clienttag)
						VALUES ($/fname/, $/lname/, $/sex/, $/address/, $/homephone/, $/cellphone/, $/email/, $/dob/, $/clienttag/)
						RETURNING *`, client);
	},

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

	destroy(id) {
		return db.none(`DELETE FROM clients
						WHERE id = $1`, id);
	},
};