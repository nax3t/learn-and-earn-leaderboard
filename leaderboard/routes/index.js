var express = require('express');
var router = express.Router();
var { asyncErrorHandler } = require('../middleware');
var {
	getIndex,
	getAbout,
	getWeeks
} = require('../controllers/index');

/* GET home page. */
router.get('/', getIndex);

/* GET about page. */
router.get('/about', getAbout);

/* GET weeks page. */
router.get('/weeks', asyncErrorHandler(getWeeks));

module.exports = router;
