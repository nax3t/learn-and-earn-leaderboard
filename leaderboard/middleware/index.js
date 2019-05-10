module.exports = {

	// Handle asynchronous functions in routes
	asyncErrorHandler: fn => (req, res, next) => {
		Promise.resolve(fn(req, res, next)).catch(next);
	},

	// Authentication middleware
	isLoggedIn: (req, res, next) => {
    if(req.isAuthenticated()){
        return next();
    }
    req.session.error = 'You need to login first!';
    res.redirect('/admin/login');
	},
	// Check if user is Admin
	isAdmin: (req, res, next) => {
		if (req.user.isAdmin) {
			return next();
		}
		req.session.error = 'This is not an admin account!';
		res.redirect('/admin/login');
	}
	
};