var express = require('express');
var router = express.Router();
var { asyncErrorHandler,
			isLoggedIn } = require('../middleware');
var {
	postAdminWeek,
	getAdminWeeks,
	getNewWeek,
	getEditWeek,
	updateWeek,
	deleteWeek
} = require('../controllers/weeks');

/* GET /admin/weeks/new */
router.get('/new', isLoggedIn, getNewWeek);

/* POST /admin/weeks */
router.post('/', isLoggedIn, asyncErrorHandler(postAdminWeek));

/* GET /admin/weeks */
router.get('/', isLoggedIn, asyncErrorHandler(getAdminWeeks));

/* GET admin/weeks/:id/edit */
router.get('/:id/edit', isLoggedIn, asyncErrorHandler(getEditWeek));

/* PUT admin/weeks/:id */
router.put('/:id', isLoggedIn, asyncErrorHandler(updateWeek));

/* DELETE admin/weeks/:id */
router.delete('/:id', isLoggedIn, asyncErrorHandler(deleteWeek));

module.exports = router;
