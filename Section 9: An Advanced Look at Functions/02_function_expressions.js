// A funciton can be stored in a variable because a function in JS is actually an object
// This also lets us store functions in arrays and also lets us pass functions as arguments
// A function without a name, not stored anywhere, is called an anonymous function, and these are used often when passed as arguments
// We can also have named function expressions

// Standard function definition
function addition(a, b) {
	return a + b;
}

// Function expression
const add = function(a, b) {
	return a + b;
};

// Named function expression
const sum = function multiple(a, b) {
	return a * b;
};

console.log(addition(1, 2));
console.log(add(1, 2));
console.log(sum(1, 2));
