var express = require('express');
var router = express.Router();
var { asyncErrorHandler,
			isLoggedIn } = require('../middleware');
var {
	getLogin,
	postLogin,
	getLogout } = require('../controllers/admin');

/* GET /admin/login */
router.get('/login', getLogin);

/* POST /admin/login */
router.post('/login', postLogin);

/* GET /admin/logout */
router.get('/logout', isLoggedIn, getLogout);

module.exports = router;
