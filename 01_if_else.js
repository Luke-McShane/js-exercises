let myVar = '3';

if (myVar === 3) {
	console.log('This is triple equals. This would be valid if myVar was an integer');
} else if (myVar === '3') {
	console.log('This is evaluated as true due to both the value and type matching.');
} else {
	console.log('Both prior statements have been evaluated as false.');
}
