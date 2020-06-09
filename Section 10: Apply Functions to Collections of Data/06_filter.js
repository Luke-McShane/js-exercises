// This method returns a subset of an array.
// Elements that qualify for this subset array must satisfy the inner function by ensuring
// the inner function returns True

const numbers = [ 12, 43, 55, 64, 98, 103, 23, 59, 66, 42, 20 ];

const oddNums = numbers.filter((n) => n % 2 === 1);
const evenNums = numbers.filter((n) => n % 2 === 0);
console.log(oddNums);

//
//
//
const books = [
	{
		title: 'Good Omens',
		authors: [ 'Terry Pratchett', 'Neil Gaiman' ],
		rating: 4.25,
		genres: [ 'fiction', 'fantasy' ]
	},
	{
		title: 'Changing My Mind',
		authors: [ 'Zadie Smith' ],
		rating: 3.83,
		genres: [ 'nonfiction', 'essays' ]
	},
	{
		title: 'Bone: The Complete Edition',
		authors: [ 'Jeff Smith' ],
		rating: 4.42,
		genres: [ 'fiction', 'graphic novel', 'fantasy' ]
	},
	{
		title: 'American Gods',
		authors: [ 'Neil Gaiman' ],
		rating: 4.11,
		genres: [ 'fiction', 'fantasy' ]
	},
	{
		title: 'A Gentleman in Moscow',
		authors: [ 'Amor Towles' ],
		rating: 4.36,
		genres: [ 'fiction', 'historical fiction' ]
	},
	{
		title: 'The Name of the Wind',
		authors: [ 'Patrick Rothfuss' ],
		rating: 4.54,
		genres: [ 'fiction', 'fantasy' ]
	},
	{
		title: 'The Overstory',
		authors: [ 'Richard Powers' ],
		rating: 4.19,
		genres: [ 'fiction', 'short stories' ]
	},
	{
		title: 'The Way of Kings',
		authors: [ 'Brandon Sanderson' ],
		rating: 4.65,
		genres: [ 'fantasy', 'epic' ]
	},
	{
		title: 'Lord of the flies',
		authors: [ 'William Golding' ],
		rating: 3.67,
		genres: [ 'fiction' ]
	}
];

// Let's try something a little more complex
// I want all fantasy novels rated over 4.2
const goodFantasyBooks = books.filter((book) => book.rating >= 4.2 && book.genres.includes('fantasy'));
console.log(goodFantasyBooks);

// The user can use a query to search for all titles which include that title
let query = 'The';
const results = books.filter((book) => {
	const title = book.title.toLowerCase();
	return title.includes(query.toLowerCase());
});
console.log(results);
