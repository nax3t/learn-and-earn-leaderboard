var express = require('express');
var router = express.Router();
var { asyncErrorHandler } = require('../middleware');
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

/* GET /admin/login */
router.get('/register', asyncErrorHandler(getRegister));

/* POST /admin/login */
router.post('/register', asyncErrorHandler(postRegister));

/* GET /admin/logout */
router.get('/logout', getLogout);

module.exports = router;
