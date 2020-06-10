// In JavaScript, we can access all arguments passed to the function using the 'arguments' keyword
// The arguments object is array-like, in that it contains all values passed as arguments, but we cannot perform
// any array methods on it.
// The ...args syntax is different in that it contains only those arguments that have not been formally defined in the
// function parameters.
// Furthermore, the rest parameters (...args) can have array methods performed on them

// This is how rest parameters work
function func1(a, b, ...args) {
	console.log('a', a);
	console.log('b', b);
	console.log('...args', args);
}
func1(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// This is the older, outdated method of using the arguments object
// Also, note that the arguments object is not used in arrow functions
function func2() {
	console.log(arguments);
}
func2(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// We don't have to name the rest parameters 'args'
const someFunc = (...toadstool) => toadstool.reduce((acc, cur) => acc * cur);
const bigNum = someFunc(2, 3, 4, 5, 6, 7, 8);
console.log(bigNum);
