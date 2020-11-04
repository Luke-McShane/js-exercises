// Callback functions are heavily used with collections of data, and this is because, within the outer function,
// we may want to perform the callback function of every item within the collection of data being operated on.
// So, for example, if we have a forEach method executed on an array, then the array will be looped through and we
// can pass a callback function that will be executed for each element within the array
// The parameter of the callback function should correspond to the individual elements within the array

const numbers = [ 1, 2, 3, 4, 5, 6 ];

numbers.forEach(function(n) {
	console.log(n * 2);
});

// We can also pass in a function to use as the callback function
// Furthermore, the callback function is not only passed the current element in the data collection,
// but it is also passed the index of that element which we can access
function triple(n, idx) {
	console.log(`Index: ${idx} Result: ${n * 3}`);
}

numbers.forEach(triple);

const books = [
	{
		title: 'Ethics',
		author: [ 'Baruch Spinoza' ],
		rating: 4.5
	},
	{
		title: 'Good Omens',
		author: [ 'Terry Pratchett', 'Neil Gaiman' ],
		rating: 3.5
	},
	{
		title: 'The Book of Disquiet',
		author: [ 'Fernando Pessoa' ],
		rating: 4.5
	}
];

// Here we are looping through the books array and printing all information for each book
// First is a more complicated example that performs a foreach on the inner array of author
// books.forEach(function(book) {
// 	console.log(
// 		`Title: ${book.title};
//     Author: ${book.author.forEach(function(a) {
// 		console.log(a);
// 	})};
//     Rating: ${book.rating}`
// 	);
// });
books.forEach(function(book) {
	console.log(
		`Title: ${book.title};
    Author: ${book.author};
    Rating: ${book.rating}`
	);
});
