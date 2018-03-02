module.exports = {

	show404(err, req, res, next) {
		res.sendStatus(404);
	},

	showSignUp(req, res) {
		res.render('signup')
	},

	showAllUsers(req,res) {
		res.render('users', {
			data: res.locals.users,
		});
	},


	showClients(req, res) {
		console.log(res.locals.clients)
		res.render('clients/index', {
			data: res.locals.clients,
		});
	},

	showOne(req, res) {
		console.log(res.locals.client)
		res.render('clients/profile', {
			data: res.locals.client,
		});
	},

	showAddForm(req, res) {
		res.render('clients/newclient')
	},

	showEditForm(req, res) {
		res.render('clients/clientedit', {
			data: res.locals.client,
		});
	},

	handleCreate(req, res) {
		res.redirect('clients')
	},

	handleUpdate(req, res) {
		res.redirect(`/clients/${req.params.id}`,);
	},

	handleDelete(req, res) {
		res.redirect('/clients');
	},

	showLogin(req, res) {
		console.log("inside show login")
		res.redirect('/login');
	},

	showSearch(req, res) {
		res.render('search');
	},
};