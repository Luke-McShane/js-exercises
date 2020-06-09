// The sort() method works as follows:
// Firstly, it should take an inner compar function that takes two arguments, which will be the two items currently being compared
// The compare function should return a value.
// If the returned value is negative, the first argument is sorted before the second
// If the returned value is 0, the order is not changed
// If the returned value is positive, the second argument is sorted before the first
// array.sort(function(a, b) {return a - b}) <-- will sort in ascending order

// We have to create two separate arrays because sort is one of the very few array methods that mutates the actual array
// We could actually use .slice() because this will create a direct copy of the array used
const prices = [ 400.5, 3000, 99.99, 35.99, 12.0, 9500 ];
const prices2 = [ 400.5, 3000, 99.99, 35.99, 12.0, 9500 ];

// So, for the first comparison, we compare 400.5 against 3000 by taking away 3000 from 400.5.
// Because this is a negative number, the first argument is sorted before the second.
// Then we move onto the next comparison, and repeat this until the array is sorted which we will know as no more swaps will be needed
const desc = prices.sort((a, b) => a - b);
const asc = prices2.sort((a, b) => b - a);

// const desc = prices.slice().sort((a, b) => a - b);
// const asc = prices2.slice().sort((a, b) => b - a);

console.log(desc);
console.log(asc);
