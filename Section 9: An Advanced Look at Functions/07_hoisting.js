// This is an example of hoisting with the var keyword.
// Hoisting is the moving of all declarations to the top of the current scope.
// This means we can use a variable without having declared it.
// So, although we here initialize shape after the first log, only its declaration is hoisted to the top of the scope
console.log(shape);
var shape = 'square';
console.log(shape);

// The above example is the same as:
// var shape;
// console.log(shape);
// shape = 'square';
// console.log(shape);

// The best practice with this is thus to declare all variables at the top of the scope,
// so that no bugs come about due to not taking note of the hoisting that would otherwise occur

// Variables defined with let and const are not hoisted to the top of the scope, meaning
// they must be manually declared before being used

// This code returns a reference error because number is not hoisted
console.log(number);
let number = 9;
console.log(number);

// Hoisting also works with functions
// If we declare a normal function, it is essentially hoisted to the top of the page
// If we define a function expression with var, then only the declaration is hoisted

// So, although we define the function after the call, the function is still accessible due to being hoisted
run();
function run() {
	console.log('I AM RUNNING');
}

// However, if we use var, then only the delcaration is hoisted
walk();
var walk = function() {
	console.log('i am walking');
};

// And if we use let or const, then nothing is hoisted
jog();
const jog = function() {
	console.log('I am jogging');
};
