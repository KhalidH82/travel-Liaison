module.exports = {

	showClients(req, res) {
		res.render('clients/index', {
			data: res.locals.clients,
		});
	}
};