const Week = require('../models/week');

module.exports = {
	/* GET home page. */
	async getIndex (req, res, next) {
	  const weeks = await Week.find({}).sort('-date').limit(4);
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
		weeks.page = Number(weeks.page);
		res.render('weeks', { weeks });
	}
};