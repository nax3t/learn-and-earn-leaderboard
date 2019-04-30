var express = require('express');
var router = express.Router();
var { asyncErrorHandler } = require('../middleware');
var {
	getIndex,
	getAbout,
	getWeeks,
	getShowWeek
} = require('../controllers/index');

/* GET home page. */
router.get('/', getIndex);

/* GET about page. */
router.get('/about', getAbout);

/* GET weeks page. */
router.get('/weeks', asyncErrorHandler(getWeeks));


/* GET weeks page. */
router.get('/weeks/:id', asyncErrorHandler(getShowWeek));

module.exports = router;
