var express = require('express');
var router = express.Router();
var { asyncErrorHandler } = require('../middleware');
var {
	getLogin,
	postLogin
} = require('../controllers/admin');

/* GET /admin/login */
router.get('/login', getLogin);

/* POST /admin/login */
router.post('/login', asyncErrorHandler(postLogin));

module.exports = router;
