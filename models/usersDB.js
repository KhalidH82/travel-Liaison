/* This module is the interface for the database. It contains
 CRUD methods in SQL to talk to the database.
 Each function returns a promise
 */

const pgp = require('pg-promise')();
const dbConfig = require('../config/dbConfig');
const hasher = require('pbkdf2-password')();
const db = pgp(dbConfig);


module.exports = {

/* This method returns all users from users table for futher build out */
	findAll() {
		return db.any('SELECT * FROM users');

	},

/* This method creates a new user and stores in users table*/
	createUser(user) {
		return db.one(`INSERT INTO users (username, password) VALUES ($[username], $[password]) RETURNING *`, user);
	},

/* This method creates a new promise the hashes the password and inserts into users database */
	create({ username, password }) {
		const hashPromise = new Promise ((resolve, reject) => {
			hasher({ password }, (err, pass, salt, hash) => {
				if (err) return reject(err);
				return resolve({
					username,
					hash,
					salt,
				});
			});
		});
		return hashPromise.then( user => {
			console.log('inside hashpromise.then ', user);
			return db.one(`
				INSERT INTO users (username, hash, salt) VALUES ($[username], $[hash], $[salt])
				RETURNING *`, user);
		}).catch( err => {
			console.log('err', err);

		});
	},

/* This method is for finding users by id for future bulid out of application */ 
	findByUserName(username) {
		return db.one(`
			SELECT * FROM users
			WHERE username=$1`,
			username,
			);
	},

/* This method is for deleting users by id for future bulid out of application*/ 
	destroyByUsername(username) {
		return db.none(
			`DELETE FROM users 
			WHERE username=$1`,
			username,
			);
	},

/* This authenticate method checks if username and password matches salted password */
	authenticate({ username, password }) {
    return this.findByUsername(username).then(
      user =>
        new Promise((resolve, reject) => {
          hasher(
            {
              password,
              salt: user.salt,
            },
            (err, pass, salt, hsh) => {
              if (err) return reject(err);
              if (user.hash !== hsh) return reject(new Error('Invalid password'));
              return resolve(user);
            },
          );
        }),
    );
  },
};


