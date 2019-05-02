const Week = require('../models/week');

module.exports = {

	/* GET home page. */
	async getIndex (req, res, next) {
	  const weeks = await Week.find({}).sort('-date').limit(4);
	  console.log(weeks);
		res.render('index', { weeks });
	},

	/* GET about page. */
	getAbout (req, res, next) {
		res.render('about');
	},

	/* GET weeks page. */
	async getWeeks (req, res, next) {
		const weeks = await Week.paginate({}, {
			page: req.query.page || 1,
			limit: 8
		});
		res.render('weeks', { weeks });
	},

	/* GET week show page. */
	async getShowWeek (req, res, next) {
		const week = await Week.findById(req.params.id);		
		res.render('show-week', { week });
	}
};