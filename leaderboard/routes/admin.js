var express = require('express');
var router = express.Router();
var { asyncErrorHandler,
			isLoggedIn } = require('../middleware');
var {
	getLogin,
	postLogin,
	getRegister,
	postRegister,
	getLogout
} = require('../controllers/admin');

/* GET /admin/login */
router.get('/login', getLogin);

/* POST /admin/login */
router.post('/login', postLogin);

// /* GET /admin/register */
// router.get('/register', asyncErrorHandler(getRegister));

//  POST /admin/register 
// router.post('/register', asyncErrorHandler(postRegister));

/* GET /admin/logout */
router.get('/logout', isLoggedIn, getLogout);

module.exports = router;
