const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

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

weekSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Week', weekSchema);