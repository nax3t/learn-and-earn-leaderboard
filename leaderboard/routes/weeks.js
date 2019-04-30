var express = require('express');
var router = express.Router();
var { asyncErrorHandler,
			isLoggedIn,
			isAdmin } = require('../middleware');
var {
	postAdminWeek,
	getAdminWeeks,
	getNewWeek,
	getEditWeek,
	updateWeek,
	deleteWeek
} = require('../controllers/weeks');

/* GET /admin/weeks/new */
router.get('/new', isLoggedIn, isAdmin, getNewWeek);

/* POST /admin/weeks */
router.post('/', isLoggedIn, isAdmin, asyncErrorHandler(postAdminWeek));

/* GET /admin/weeks */
router.get('/', isLoggedIn, isAdmin, asyncErrorHandler(getAdminWeeks));

/* GET admin/weeks/:id/edit */
router.get('/:id/edit', isLoggedIn, isAdmin, asyncErrorHandler(getEditWeek));

/* PUT admin/weeks/:id */
router.put('/:id', isLoggedIn, isAdmin, asyncErrorHandler(updateWeek));

/* DELETE admin/weeks/:id */
router.delete('/:id', isLoggedIn, isAdmin, asyncErrorHandler(deleteWeek));

module.exports = router;
