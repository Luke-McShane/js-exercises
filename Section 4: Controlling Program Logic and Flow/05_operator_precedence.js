let x = 3;

// Reading this from left to right, we would presume that the statement is evaluated as false,
// because x is not less than 2.
// However, because the ampersands, 'and' operator (&&), takes precedence over the bars, 'or' operator (||), the AND expression
// is evaluated first and the, because the OR statement is true (because 'x === 3' is true), the overall statement is evaluated as true
//The expression is the equivalent of: if(x === 3 || (x === 4 && x < 2))
if (x === 3 || (x === 4 && x < 2)) {
	console.log('Success');
}
