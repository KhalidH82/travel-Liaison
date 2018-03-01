const express = require('express');
const views = require('../controllers/viewController');
const signupRouter = express.Router();



signupRouter.get('/', views.showSignUp)


module.exports = signupRouter;
