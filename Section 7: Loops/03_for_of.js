// We can easily iterate over items in an array/map through using the for.. of loop
// We define a variable using either const or let (or var - but don't use var) and then state which iterable to use
let nums = [ 10, 20, 30, 40 ];

for (const val of nums) {
	console.log(val);
}

for (let val of nums) {
	val += 1;
	console.log(val);
}

// A for..of loop is best for when we don't need an index. If we had two arrays and we used the current index in one
// array to access a corresponding element in another array, then we cannot use a for..of loop

let words1 = [ 'mail', 'milk', 'bath', 'black' ];
let words2 = [ 'box', 'man', 'tub', 'jack' ];

for (let word of words1) {
	// How are we meant to access the corresponding value in words2 without an index?
	// What a great effort! It'd be much easier using a standard for loop
	console.log(`${word}${words2[words1.indexOf(word)]}`);
}

for (let i = 0; i < words1.length; i++) {
	console.log(`${words1[i]}${words2[i]}`);
}

// Although we cannot directly iterate over an object, we can access the keys and values as an array,
// which can be iterated over.

let movieReviews = {
	Arrival: 9.5,
	Alien: 8.5,
	Amelie: 7.5,
	'In Bruges': 6,
	Amadeus: 7,
	'Kill Bill': 9,
	'Little Miss Sunshine': 5,
	Coraline: 7
};

// Will not work, for movieReviews is not iterable
// for (movie of movieReviews) {
// 	console.log(movie);
// }

// However, we can use the Object class methods .keys() and .values() to access the inner content
// We don't use dot notation for accessing the value, for we have a variable, and this would be converted directly to a string
for (movie of Object.keys(movieReviews)) {
	console.log(`Movie: ${movie} Score: ${movieReviews[movie]}`);
}
