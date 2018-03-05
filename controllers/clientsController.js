const clientDB = require('../models/clientDB');
const usersDB = require('../models/usersDB')
module.exports = {

/* Creates new client and stores it in res.locals */
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

/* Finds all clients and stores in res.locals and passes on the views controller to render */
index(req, res, next) {
    clientDB.findAll()
      .then((clients) => {
        res.locals.clients = clients;
        next();
      })
      .catch(err => next(err));
  },	

/* Gets one client by id and stores in res.locals and passes on to views controller to render */
getOne(req, res, next) {
    clientDB.findById(req.params.id)
      .then((client) => {
        res.locals.client = client;
        next();
      })
      .catch(err => next(err));
  },

/* Creates a clients and saves to database then passes on to views controller to render */
 create(req, res, next) {
    clientDB.save(req.body)
      .then((client) => {
        res.locals.client = client;
        next();
      })
      .catch(err => next(err));
  },

/* Update client profile and database and passed on the views controller to render */
 update(req, res, next) {
    clientDB.update(req.body)
      .then((client) => {
        res.locals.client = client;
        next();
      })
      .catch(err => next(err));
  },

/* Deletes client from database by id */
 destroy(req, res, next) {
    clientDB.destroy(req.params.id)
      .then(() => next())
      .catch(err => next(err));
  },
};