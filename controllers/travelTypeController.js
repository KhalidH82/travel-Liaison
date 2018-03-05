const typeDB = require('../models/typeDB');

module.exports = {

/* Get all types of traveler from data base and stores in res.locals */
index(req, res, next) {
    typeDB.findAll()
      .then((types) => {
        res.locals.type = types;
        next();
      })
      .catch(err => next(err));
  },	
};