const express = require('express');

const clientsController = require('../controllers/clientsController');

const views = require('../controllers/viewController');

const clientsRouter = express.Router();


clientsRouter.get('/', clientsController.index, views.showClients);
clientsRouter.get('/:id', clientsController.getOne, views.showOne);


















module.exports = clientsRouter;