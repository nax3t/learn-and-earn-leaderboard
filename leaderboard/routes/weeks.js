var express = require('express');
var router = express.Router();
var { asyncErrorHandler } = require('../middleware');
var {
	getNewWeek,
	postAdminWeek,
	getAdminWeeks,
	getAdminShowWeek,
	getEditWeek,
	updateWeek,
	deleteWeek
} = require('../controllers/weeks');

/* GET /admin/weeks/new */
router.get('/new', getNewWeek);

/* POST /admin/weeks */
router.post('/', asyncErrorHandler(postAdminWeek));

/* GET /admin/weeks */
router.get('/', asyncErrorHandler(getAdminWeeks));

/* GET admin/weeks/:id */
router.get('/:id', asyncErrorHandler(getAdminShowWeek));

/* GET admin/weeks/:id/edit */
router.get('/:id/edit', asyncErrorHandler(getEditWeek));

/* PUT admin/weeks/:id */
router.put('/:id', asyncErrorHandler(updateWeek));

/* DELETE admin/weeks/:id */
router.delete('/:id', asyncErrorHandler(deleteWeek));

module.exports = router;
