const pgp = require('pg-promise')();
const dbConfig = require('../config/dbConfig');
const hasher = require('pbkdf2-password')();
const db = pgp(dbConfig);


module.exports = {

	findAll() {
		return db.any('SELECT * FROM users');

	},

	createUser(user) {
		return db.one(`INSERT INTO users (username, password) VALUES ($[username], $[password]) RETURNING *`, user);
	},

	create({ username, password }) {
		// console.log('--> inside create', hashPromise);
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

	findByUserName(username) {
		return db.one(`
			SELECT * FROM users
			WHERE username=$1`,
			username,
			);
	},

	destroyByUsername(username) {
		return db.none(
			`DELETE FROM users 
			WHERE username=$1`,
			username,
			);
	},

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


