
		// Get start and end date of current Week
		const defineWeek = function() {
			const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
			let today = new Date;
			let start = today.getDate() - today.getDay() + 1;
			let end = start + 6;
			let monday = new Date(today.setDate(start));
			let sunday = new Date(today.setDate(end));
			return `${monthNames[monday.getMonth()]} ${monday.getDate()} - ${monthNames[sunday.getMonth()]} ${sunday.getDate()}`
		};

		$('#week').attr('value', defineWeek());
		