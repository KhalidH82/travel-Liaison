const usersDB = require('../models/usersDB')
module.exports = {

findUsers(req, res, next){
  	usersDB.findAll()
  	.then(users => {
  		res.locals.users = users
  		next()
  	})
  	.catch(err => next(err))
  },

  makeNewUser(req, res, next) {
  	usersDB.create(req.body)
  	.then(user => {
  		res.locals.user = user;
 		res.redirect('/login');
  	})
  	.catch(err => console.log(err));

  },
}