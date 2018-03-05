const express = require('express');
const clientsController = require('../controllers/clientsController');
const travelTypeController = require('../controllers/travelTypeController');
const userController = require('../controllers/usersController');
const views = require('../controllers/viewController');
const clientsRouter = express.Router();


/* This is the route which handles users sign up, find all users, and create new users*/
clientsRouter.get('/signup', views.showSignUp, views.show404)
clientsRouter.get('/users', userController.findUsers, views.showAllUsers, views.show404)
clientsRouter.post('/users', userController.makeNewUser, views.showLogin)

/* This route directs users to search page that has Google API built in */
clientsRouter.get('/search', views.showSearch, views.show404)

/* This route handles creating and editing new clients by id */
clientsRouter.get('/:id/editclient', travelTypeController.index,clientsController.index, clientsController.getOne, views.showEditForm, views.show404);
clientsRouter.get('/newclient', travelTypeController.index, clientsController.makeNewClient, views.showAddForm, views.show404);

/* This route gets, updates, and deletes clients by their id */
clientsRouter.get('/:id', travelTypeController.index, clientsController.getOne, views.showOne, views.show404);
clientsRouter.put('/:id', clientsController.update, views.handleUpdate)
clientsRouter.delete('/:id', clientsController.destroy, views.handleDelete, views.show404);

/* This route views all clients in database and creates a client */
clientsRouter.get('/', clientsController.index, views.showClients, views.show404);
clientsRouter.post('/', clientsController.create, views.handleCreate);

















module.exports = clientsRouter;