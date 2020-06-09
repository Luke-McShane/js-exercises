// If we are creating a simple arrow function, then we can implicitly return the value
// without having to use either curly braces or the return keyword
// By 'simple arrow function' I mean an arrow function that contains a single expression

// So, as a normal arrow function
const double = (x) => {
	return x * 2;
};

// And now an arrow function with an implicit return
const triple = (x) => x * 3;

//
//
//
// We can use implicit return to elegantly perform methods on arrays
const nums = [ 1, 2, 4, 8, 16, 32 ];

// This is the most explicit form, where we are not using an arrow function
const doubles1 = nums.map(function(num) {
	return num * 2;
});

// Here we shorten the method through making use of an arrow function
const doubles2 = nums.map((num) => {
	return num * 2;
});

// Because the arrow function is simple, in that it contains only a single expression, and we can thus use the implicit return
const doubles3 = nums.map((num) => num * 2);

console.log(doubles1);
console.log(doubles2);
console.log(doubles3);

//
//
//
// We can also use a ternary operator, for this is still a single expression
const moreNums = [ 123, 232, 517, 444, 412, 6, 4, 3, 17 ];
const parityList = moreNums.map((num) => (num % 2 === 0 ? 'even' : 'odd'));
console.log(parityList);
