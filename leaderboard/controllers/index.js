const Week = require('../models/week');

module.exports = {

	/* GET home page. */
	getIndex (req, res, next) {
	  res.render('index', { title: 'Express' });
	},

	/* GET about page. */
	getAbout (req, res, next) {
		res.render('about');
	},

	/* GET weeks page. */
	async getWeeks (req, res, next) {
		const weeks = await Week.find({});
		res.render('weeks', { weeks });
	},

	/* GET week show page. */
	async getShowWeek (req, res, next) {
		const week = await Week.findById(req.params.id);		
		res.render('show-week', { week });
	}
};