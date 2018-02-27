const typeDB = require('../models/typeDB');

module.exports = {

index(req, res, next) {
    typeDB.findAll()
      .then((types) => {
        res.locals.type = types;
        next();
      })
      .catch(err => next(err));
  },	
};