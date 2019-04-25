const mongoose = require('mongoose');

const weekSchema = new mongoose.Schema({
	dateRange: String,
	winners: [
		{
			name: String,
			place: String
		}
	]
});

module.exports = mongoose.model('Week', weekSchema);