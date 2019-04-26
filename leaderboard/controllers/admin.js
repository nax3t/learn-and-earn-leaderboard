const User = require('../models/user');
const passport = require('passport');

module.exports = {

	/* GET /admin/login */
	getLogin (req, res, next) {
	  res.render('admin/login');
	},

	/* POST /admin/login */
	postLogin (req, res, next) {
		passport.authenticate('local', { 
			successRedirect: '/admin/weeks',
			failureRedirect: '/admin/login'
		})(req, res, next);
	},

	/* GET /admin/logout */
	getLogout (req, res, next) {
		req.logout();
	  res.redirect('/weeks');
	},
}
