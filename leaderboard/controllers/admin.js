const passport = require('passport');

module.exports = {

	/* GET /admin/login */
	getLogin (req, res, next) {
	  res.render('admin/login');
	},

	/* POST /admin/login */
	async postLogin (req, res, next) {
		passport.authenticate('local', { 
		failureRedirect: '/admin/login',
		successRedirect: '/admin/weeks'
		})(req, res, next);
	} 
}