module.exports = {

	showClients(req, res) {
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


	handleCreate(req, res) {
		res.redirect('clients')
	},

	handleDelete(req, res) {
		res.redirect('/clients');
	},
};