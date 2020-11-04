// The spread syntax allows for an object iterable (function calls, array, object) to be expanded into the list of arguments
// through the use of three dots (...) that precede the object name
function sum(x, y, z) {
	console.log(x);
	console.log(y);
	console.log(z);
	return x + y + z;
}

myArr = [ 2, 4, 6 ];

// For example, the first example won't work, but the second will, because we expand (spread) the array into the list of elements within
// In this first example, what's happening is that we're setting 'x' to the entire array, and 'y' and 'z' remain undefined
console.log(sum(myArr));
// These two below examples are equivalent, and the first example below shows the function of the spread syntax
console.log(sum(2, 4, 6));
console.log(sum(...myArr));

// We can also iterate over - and thus spread - strings
console.log(...'GOAT');
