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
};