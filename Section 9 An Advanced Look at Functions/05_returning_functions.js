// We can also return a function
function multiplyBy(num) {
	return function(x) {
		return x * num;
	};
}

const double = multiplyBy(2);
const triple = multiplyBy(3);

// Within this function we return a function that takes a single parameter
// The two parameters passed to this function are used simply to create this custom function that will be returned
function makeBetweenFunc(a, b) {
	return function(num) {
		return num >= a && num <= b;
	};
}

// Here we create functions by passing in two functions to a 'function factory' that will make a custom function based on the
// parameters passed
const isChild = makeBetweenFunc(0, 18);
const isAdult = makeBetweenFunc(19, 65);
const isPensioner = makeBetweenFunc(66, 126);

console.log(isChild(9));
console.log(isChild(19));
console.log(isAdult(19));
console.log(isAdult(2));
console.log(isPensioner(23));
console.log(isPensioner(76));
