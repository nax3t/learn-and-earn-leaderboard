const Week = require('../models/weeks');
module.exports = {

	/* GET /admin/weeks/new */
	getNewWeek (req, res, next) {
	 	res.render('weeks/new');
	},

	/* POST /admin/weeks */
	async postAdminWeek (req, res, next) {
 		let newWeek = {
 			dateRange: req.body.weekDays,
 			winners: [
	 			{ place: '1st', name: req.body.first },
	 			{ place: '2nd', name: req.body.second },
	 			{ place: '3rd', name: req.body.third }
 			]
 		};
 		await Week.create(newWeek, (err, createdWeek) => {
 			if (err) {
 				console.log(err);
 			} else {
 				console.log(createdWeek);
				res.redirect('/admin/weeks');
 			}
 		});	
 	},

	/* GET /admin/weeks */
	async getAdminWeeks (req, res, next) {
		await Week.find({}, (err, weeks) => {
			if (err) {
				console.log(err);
			} else {
				res.render('weeks/weeks', { weeks });
			}
		});
	},

	/* GET admin/weeks/:id */
	async getAdminShowWeek (req, res, next) {
		let week = await Week.findById(req.params.id);
	  res.render('weeks/show-week', { week });
	},

	/* GET admin/weeks/:id/edit */
	async getEditWeek (req, res, next) {
	  res.send('GET admin/weeks/:id/edit');
	},

	/* PUT admin/weeks/:id */
	async updateWeek (req, res, next) {
	  res.send('PUT admin/weeks/:id');
	},

	/* DELETE admin/weeks/:id */
	async deleteWeek (req, res, next) {
	  res.send('DELETE admin/weeks/:id');
	}
};