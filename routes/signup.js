const express = require('express');
const views = require('../controllers/viewController');
const signupRouter = express.Router();

/* This route handles signing up users */
signupRouter.get('/', views.showSignUp)


module.exports = signupRouter;
