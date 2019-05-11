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
		req.session.success = 'Week created successfully!'
		res.redirect('/admin/weeks'); 			
 	},

	// /* GET admin/weeks/:id/edit */
	// async getEditWeek (req, res, next) {
	// 	const week = await Week.findById(req.params.id);
	//   res.render('weeks/edit', { week });
	// },

	// /* PUT admin/weeks/:id */
	// async updateWeek (req, res, next) {
	//   const week = await Week.findById(req.params.id);
	//   week.winners = [
	//  			{ place: '1st', name: req.body.first },
	//  			{ place: '2nd', name: req.body.second },
	//  			{ place: '3rd', name: req.body.third }
 // 			];
 // 		week.dateRange = req.body.dateRange;
	//   week.save();
	//   		req.session.success = 'Week edited successfully!'
	// 	res.redirect('/admin/weeks');
	// },

	// /* DELETE admin/weeks/:id */
	// async deleteWeek (req, res, next) {
	// 	await Week.findByIdAndRemove(req.params.id);
	// 	req.session.success = 'Week deleted successfully!'
	// 	res.redirect('back');
	// }
};