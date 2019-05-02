const mongoose = require('mongoose');
const Week = require('./models/week.js');


const data = [
	{
		dateRange: '22 April - 28 April',
		date: 1,
		winners: [
			{
				name: 'Louli',
				place: '1st'
			},
			{
				name: 'Devendra',
				place: '2nd'
			},
			{
				name: 'Lucas',
				place: '3rd'
			}
		]
	},
	{
		dateRange: '29 April - 5 May',
		date: 2,
		winners: [
			{
				name: 'Devendra',
				place: '1st'
			},
			{
				name: 'Lucas',
				place: '2nd'
			},
			{
				name: 'Louli',
				place: '3rd'
			}
		]
	},
	{
		dateRange: '6 June - 12 June',
		date: 3,
		winners: [
			{
				name: 'Louli',
				place: '1st'
			},
			{
				name: 'Lucas',
				place: '2nd'
			},
			{
				name: 'Devendra',
				place: '3rd'
			}
		]
	},
	{
		dateRange: '22 April - 28 April',
		date: 4,
		winners: [
			{
				name: 'Louli',
				place: '1st'
			},
			{
				name: 'Devendra',
				place: '2nd'
			},
			{
				name: 'Lucas',
				place: '3rd'
			}
		]
	},
	{
		dateRange: '29 April - 5 May',
		date: 5,
		winners: [
			{
				name: 'Devendra',
				place: '1st'
			},
			{
				name: 'Lucas',
				place: '2nd'
			},
			{
				name: 'Louli',
				place: '3rd'
			}
		]
	},
	{
		dateRange: '6 June - 12 June',
		date: 6,
		winners: [
			{
				name: 'Louli',
				place: '1st'
			},
			{
				name: 'Lucas',
				place: '2nd'
			},
			{
				name: 'Devendra',
				place: '3rd'
			}
		]
	},
	{
		dateRange: '22 April - 28 April',
		date: 7,
		winners: [
			{
				name: 'Louli',
				place: '1st'
			},
			{
				name: 'Devendra',
				place: '2nd'
			},
			{
				name: 'Lucas',
				place: '3rd'
			}
		]
	},
	{
		dateRange: '29 April - 5 May',
		date: 8,
		winners: [
			{
				name: 'Devendra',
				place: '1st'
			},
			{
				name: 'Lucas',
				place: '2nd'
			},
			{
				name: 'Louli',
				place: '3rd'
			}
		]
	},
	{
		dateRange: '6 June - 12 June',
		date: 9,
		winners: [
			{
				name: 'Louli',
				place: '1st'
			},
			{
				name: 'Lucas',
				place: '2nd'
			},
			{
				name: 'Devendra',
				place: '3rd'
			}
		]
	}
];

async function seedDB() {
	await Week.remove({});
	data.forEach(seed => {
		Week.create(seed);
	});
	console.log('Nine weeks created!')
}

module.exports = seedDB;
