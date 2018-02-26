const express = require('express');

const clientsController = require('../controllers/clientsController');

const views = require('../controllers/viewController');

const clientsRouter = express.Router();



clientsRouter.get('/newclient', clientsController.index, clientsController.makeNewClient, views.showAddForm)


clientsRouter.get('/:id', clientsController.getOne, views.showOne);
clientsRouter.delete('/:id', clientsController.destroy, views.handleDelete);


clientsRouter.get('/', clientsController.index, views.showClients);
clientsRouter.post('/', clientsController.create, views.handleCreate);
















module.exports = clientsRouter;