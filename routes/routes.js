// var User = require('../user');

module.exports = function(app) {

	app.get('/', function(req, res) {
		res.render('index');
	});
}
