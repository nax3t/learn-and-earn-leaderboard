const mongoose = require('mongoose');

const weekSchema = new mongoose.Schema({
	dateRange: {
		type: String,
		default: new Date().toDateString()	
	},
	winners: [
		{
			name: String,
			place: String
		}
	]
});

module.exports = mongoose.model('Week', weekSchema);