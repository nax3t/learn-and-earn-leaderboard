const express = require('express');
const router = express.Router();
const { asyncErrorHandler } = require('../middleware');
const {
	postAdminWeek,
	getAdminWeeks,
	getNewWeek
} = require('../controllers/weeks');

/* GET /admin/weeks/new */
router.get('/new', getNewWeek);

/* POST /admin/weeks */
router.post('/', asyncErrorHandler(postAdminWeek));

// /* GET /admin/weeks */
// router.get('/', asyncErrorHandler(getAdminWeeks));

// /* GET admin/weeks/:id/edit */
// router.get('/:id/edit', asyncErrorHandler(getEditWeek));

// /* PUT admin/weeks/:id */
// router.put('/:id', asyncErrorHandler(updateWeek));

// /* DELETE admin/weeks/:id */
// router.delete('/:id', asyncErrorHandler(deleteWeek));

module.exports = router;
