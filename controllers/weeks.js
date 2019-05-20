const Week = require('../models/week');

module.exports = {

	/* GET /admin/weeks */
	async getAdminWeeks (req, res, next) {
		const weeks = await Week.paginate({}, {
			page: req.query.page || 1,
			limit: 12
		});
		weeks.page = Number(weeks.page);
		res.render('weeks/index', { weeks });
	},

	/* GET /admin/weeks/new */
	getNewWeek (req, res, next) {
	 	res.render('weeks/new');
	},

	/* POST /admin/weeks */
	async postAdminWeek (req, res, next) {
		if (!req.body.adminAuth || req.body.adminAuth !== process.env.ADMIN_AUTH) {
			req.session.error = 'You are unauthorized!'
			return res.redirect('/');
		}
 		let newWeek = {
 			dateRange: req.body.weekDays,
 			winners: [
	 			{ place: '1st', name: req.body.first },
	 			{ place: '2nd', name: req.body.second },
	 			{ place: '3rd', name: req.body.third }
 			]
 		};
 		await Week.create(newWeek);
		req.session.success = 'Week created successfully!';
		res.redirect('/'); 			
 	}
};