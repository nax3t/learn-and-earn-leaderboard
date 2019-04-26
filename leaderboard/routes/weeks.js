var express = require('express');
var router = express.Router();
var { asyncErrorHandler,
			isLoggedIn,
			requireAdmin } = require('../middleware');
var {
	postAdminWeek,
	getAdminWeeks,
	getNewWeek,
	getEditWeek,
	updateWeek,
	deleteWeek
} = require('../controllers/weeks');

/* GET /admin/weeks/new */
router.get('/new', isLoggedIn, requireAdmin, getNewWeek);

/* POST /admin/weeks */
router.post('/', isLoggedIn, requireAdmin, asyncErrorHandler(postAdminWeek));

/* GET /admin/weeks */
router.get('/', isLoggedIn, requireAdmin, asyncErrorHandler(getAdminWeeks));

/* GET admin/weeks/:id/edit */
router.get('/:id/edit', isLoggedIn, requireAdmin, asyncErrorHandler(getEditWeek));

/* PUT admin/weeks/:id */
router.put('/:id', isLoggedIn, requireAdmin, asyncErrorHandler(updateWeek));

/* DELETE admin/weeks/:id */
router.delete('/:id', isLoggedIn, requireAdmin, asyncErrorHandler(deleteWeek));

module.exports = router;
