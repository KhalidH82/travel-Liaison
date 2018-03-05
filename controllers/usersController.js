const usersDB = require('../models/usersDB')

module.exports = {

/* Stores all users in res.locals */
findUsers(req, res, next){
  	usersDB.findAll()
  	.then(users => {
  		res.locals.users = users
  		next()
  	})
  	.catch(err => next(err))
  },

/* Creates a new user and redirects to them to login page */
  makeNewUser(req, res, next) {
  	usersDB.create(req.body)
  	.then(user => {
  		res.locals.user = user;
 		res.redirect('/login');
  	})
  	.catch(err => next(err));

  },
}