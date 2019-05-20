/*======================================
-Get start and end date of current Week
=======================================*/

const defineWeek = function() {
	// Get current date
	const today = new Date;
	// Get date of last monday 
	const start = (today.getDate() - today.getDay() + 1) - 7;
	// Add 6 to get date of sunday 
	const end = start + 6;
	// Set the actual dates to monday and sunday
	const monday = new Date(today.setDate(start));
	const sunday = new Date(today.setDate(end));
	
	// Array of months
	const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	
	// Fix next-month-sunday issue
	let sundayMonth;
	sunday.getDate() < monday.getDate() ? sundayMonth = monthNames[sunday.getMonth() + 1] : sundayMonth = monthNames[sunday.getMonth()];

	// Return a string with the week-range  
	return `${monthNames[monday.getMonth()]} ${monday.getDate()} - ${sundayMonth} ${sunday.getDate()}`
};
// set week value to returned string
$('#week').attr('value', defineWeek());


/*======================================
		-Animate dash in About subtitle
=======================================*/

// set function to toggle display every 500ms
setInterval(function(){
	// toggle dash display value
	$('#dash').toggle();
}, 1000);	