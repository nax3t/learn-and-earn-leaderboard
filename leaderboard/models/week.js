const mongoose = require('mongoose');

const weekSchema = new mongoose.Schema({
	dateRange: String,
	winners: [
		{
			name: String,
			place: String
		}
	],
	date: {
		type: Number,
		default: Date.now()
	}
});

module.exports = mongoose.model('Week', weekSchema);