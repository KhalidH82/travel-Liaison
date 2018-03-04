const express = require('express');
const clientsController = require('../controllers/clientsController');
const travelTypeController = require('../controllers/travelTypeController');
const userController = require('../controllers/usersController');
const views = require('../controllers/viewController');
const clientsRouter = express.Router();



clientsRouter.get('/signup', views.showSignUp, views.show404)
clientsRouter.get('/users', userController.findUsers, views.showAllUsers, views.show404)
clientsRouter.post('/users', userController.makeNewUser, views.showLogin)

clientsRouter.get('/search', views.showSearch, views.show404)

clientsRouter.get('/:id/editclient', travelTypeController.index,clientsController.index, clientsController.getOne, views.showEditForm, views.show404);
clientsRouter.get('/newclient', travelTypeController.index, clientsController.makeNewClient, views.showAddForm, views.show404);


clientsRouter.get('/:id', travelTypeController.index,clientsController.getOne, views.showOne, views.show404);
clientsRouter.put('/:id', clientsController.update, views.handleUpdate)
clientsRouter.delete('/:id', clientsController.destroy, views.handleDelete, views.show404);


clientsRouter.get('/', clientsController.index, views.showClients, views.show404);
clientsRouter.post('/', clientsController.create, views.handleCreate);

















module.exports = clientsRouter;