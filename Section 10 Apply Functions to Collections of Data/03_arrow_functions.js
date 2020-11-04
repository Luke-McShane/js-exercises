// An arrow function is just like a function expression, but we don't need to use the 'function' keyword to declare
// that we are creating a function.
// However, the arrow function has now binding to the 'this' keyword, and are thus ill-suited as methods, and they cannot
// be used as constructors

// The two functions below are equivalent
const double1 = function(num) {
	console.log(num * 2);
};

// The extension installed automatically parenthesizes this parameter, but single parameters used in arrow functions need
// not be parenthesized
const double2 = (num) => {
	console.log(num * 2);
};

// Functions taking more than one parameter must be parenthesized
const multiply1 = function(x, y) {
	console.log(x * y);
};

const multiply2 = (x, y) => {
	console.log(x * y);
};

// Furthermore, functions that take no parameters simply need a set of empty parentheses when used in arrow functions
const helloWorld1 = function() {
	console.log('Hello World!');
};

const helloWorld2 = () => {
	console.log('Hello World!');
};

double1(2);
double2(3);
multiply1(3, 3);
multiply2(3, 4);
helloWorld1();
helloWorld2();
