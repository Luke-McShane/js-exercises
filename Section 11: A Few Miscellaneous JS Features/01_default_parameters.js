// Default function parameters allowed arguments to be initialized with no value passed for the default value is defined within the parameter list
function multiply(a, b = 2) {
	return a * b;
}

// In the second instance we only pass one argument, and the default parameter is used as the second parameter
// If we passed only one argument and a default parameter isn't passed, then the argumentnot passed is set to undefined.
// So, in the second case here, 'a' would be set to 5 and 'b' would be set to undefined, had the default parameter not been set
console.log(multiply(5, 3));
console.log(multiply(5));

// Before we had default parameters, we set 'default' parameters as such:
// This first statement says 'If the type of y is "undefined", set y to 1, else keep y as the same value
// function multiply(a, b) {
//   y = typeof y === 'undefined' ? 1 : y;
//   return a * b
// }

const greet = (person, greeting = 'Hi') => console.log(`${greeting}, ${person}`);
greet('Luke', 'Hello');
greet('Mark');

// Default parameters should always come at the end of the parameter list, or else the ordering can become messed up in that,
// if you defined a default parameter as the first parameter and only passed one argument to the function, then the default parameter would
// be replaced with the passed value, and the second value would be undefined

// When calling add(4), x will be set as 4 and y would remain undefined
function add(x = 2, y) {
	return x + y;
}

add(4);
