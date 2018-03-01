const clientDB = require('../models/clientDB');
const usersDB = require('../models/usersDB')
module.exports = {


makeNewClient(req, res, next) {
    const newClient = {
      id:         null,
      fname:    null,
      lname:     null,
      sex: null,
      address: null,
      homephone: null,
      cellphone: null,
      email: null,
      dob: null,
      clienttag: null,
    };
    res.locals.client = newClient;
    next();
  },

  findUsers(req, res, next){
  	usersDB.findAll()
  	.then(users => {
  		res.locals.users = users
  		next()
  	})
  	.catch(err => next(err))
  },

  makeNewUser(req, res) {
  	usersDB.create(req.body)
  	.then(user => {
  		res.locals.user = user;
 
  	})
  	.catch(err => console.log(err));

  },

index(req, res, next) {
    clientDB.findAll()
      .then((clients) => {
        res.locals.clients = clients;
        next();
      })
      .catch(err => next(err));
  },	

getOne(req, res, next) {
    clientDB.findById(req.params.id)
      .then((client) => {
        res.locals.client = client;
        next();
      })
      .catch(err => next(err));
  },

 create(req, res, next) {
    clientDB.save(req.body)
      .then((client) => {
        res.locals.client = client;
        next();
      })
      .catch(err => next(err));
  },

 update(req, res, next) {
    clientDB.update(req.body)
      .then((client) => {
        res.locals.client = client;
        next();
      })
      .catch(err => next(err));
  },

 destroy(req, res, next) {
    clientDB.destroy(req.params.id)
      .then(() => next())
      .catch(err => next(err));
  },
};