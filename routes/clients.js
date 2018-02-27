const express = require('express');

const clientsController = require('../controllers/clientsController');
const travelTypeController = require('../controllers/travelTypeController');
const views = require('../controllers/viewController');

const clientsRouter = express.Router();



clientsRouter.get('/:id/editclient', clientsController.index, clientsController.getOne, views.showEditForm, views.show404);
clientsRouter.get('/newclient', travelTypeController.index, clientsController.makeNewClient, views.showAddForm, views.show404);


clientsRouter.get('/:id', travelTypeController.index,clientsController.getOne, views.showOne, views.show404);
clientsRouter.put('/:id', clientsController.update, views.handleUpdate)
clientsRouter.delete('/:id', clientsController.destroy, views.handleDelete, views.show404);


clientsRouter.get('/', clientsController.index, views.showClients);
clientsRouter.post('/', clientsController.create, views.handleCreate);
















module.exports = clientsRouter;