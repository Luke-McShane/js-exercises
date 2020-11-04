// Map is used to create a new array from an existing array
const numbers = [ 10, 12, 51, 52, 53, 9 ];

const doubledNums = numbers.map(function(num) {
	return num * 2;
});

console.log(doubledNums);

// We can return objects from the map function, creating an array of objects
const numInfo = numbers.map(function(num) {
	return {
		number: num,
		isEven: num % 2 === 0
	};
});

console.log(numInfo);
