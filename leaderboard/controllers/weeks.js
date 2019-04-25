module.exports = {

	/* GET /admin/weeks/new */
	getNewWeek (req, res, next) {
	  res.send('GET /admin/weeks/new');
	},

	/* POST /admin/weeks */
	async postAdminWeek (req, res, next) {
		res.send('POST /admin/weeks');
	},

	/* GET /admin/weeks */
	async getAdminWeeks (req, res, next) {
		res.send('GET /admin/weeks');
	},

	/* GET admin/weeks/:id */
	async getAdminShowWeek (req, res, next) {
	  res.send('GET admin/weeks/:id');
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