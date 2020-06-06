let day = 'Saturday';

switch (day.toUpperCase) {
	// The break statement stops the remainder of the code in this switch statement to be run
	case 'MONDAY':
		console.log('The day is Monday');
		break;
	case 'TUESDAY':
		console.log('The day is Tuesday');
		break;
	case 'TUESDAY':
		console.log('The day is Tuesday');
		break;
	case 'WEDNESDAY':
		console.log('The day is Wednesday');
		break;
	case 'THURSDAY':
		console.log('The day is Thursday');
		break;
	case 'FRIDAY':
		console.log('The day is Friday');
		break;
	case 'SATURDAY':
		console.log('The day is Saturday');
		break;
	case 'SUNDAY':
		console.log('The day is Sunday');
		break;
	// We don't need to put a break after the default statement, for there is no more code that
	// can be run in the switch statement
	default:
		console.log('Please enter a valid day of the week');
}

let emoji = 'sad face';

switch (emoji.toLowerCase) {
	//If we have an output/execution statement that pertains to multiple cases, then we can just
	// line the case statements up as such for, when they enter the execution statement, they will break
	// and no more code in the switch statement will be run.
	case 'sad face':
	case 'happy face':
	case 'angry face':
		console.log('The colour of this emoji is yellow');
		break;
	case 'lips':
	case 'heart':
		console.log('The colour of this emoji is red');
		break;
	case 'eggplant':
		console.log('The colour of this emoji is purple');
		break;
	default:
		console.log('Please enter a valid emoji name');
		break;
}
