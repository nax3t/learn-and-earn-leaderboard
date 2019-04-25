const Week = require('../models/weeks');

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
		await Week.find({}, (err, weeks) => {
			if (err) {
				console.log(err);
			} else {
				res.render('weeks', { weeks });
			}
		});
	},

	/* GET week show page. */
	async getShowWeek (req, res, next) {
		let week = await Week.findById(req.params.id);		
		res.render('show-week', { week });
	}
};