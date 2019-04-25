const User = require('../models/users');
const passport = require('passport');

module.exports = {

	/* GET /admin/login */
	getLogin (req, res, next) {
	  res.render('admin/login');
	},

	/*getRegister (req, res, next) {
	  res.render('admin/register');
	},

	async postRegister (req, res, next) {
	    const newUser = new User({
	      username: req.body.username,
	    });
    await User.register(newUser, req.body.password);
    res.redirect('/weeks');
  },*/

	/* POST /admin/login */
	postLogin (req, res, next) {
		passport.authenticate('local', { 
			successRedirect: '/weeks',
			failureRedirect: '/admin/login'
		})(req, res, next);
	},

	/* GET /admin/logout */
	getLogout (req, res, next) {
		req.logout();
	  res.redirect('/weeks');
	},
}
