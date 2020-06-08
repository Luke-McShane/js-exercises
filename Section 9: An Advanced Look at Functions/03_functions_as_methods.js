function add(x, y) {
	return x + y;
}

const subtract = function(x, y) {
	return x - y;
};

function multiply(x, y) {
	return x * y;
}

const divide = function(x, y) {
	return x / y;
};

// We can store functions in an array and execute them, as below
const operations = [ add, subtract, multiply, divide ];

for (func of operations) {
	console.log(func(25, 5));
}

// We can also store functions in an object, thus creating our own methods
const ops = {
	addFunc: add,
	subFunc: subtract,
	mulFunc: multiply,
	divFunc: divide
};

console.log(ops.addFunc(100, 5));
console.log(ops.subFunc(100, 5));
console.log(ops.mulFunc(100, 5));
console.log(ops.divFunc(100, 5));
