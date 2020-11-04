// A for..in loop iterates over all the enumerable properties of an object.
// This is different than for..of because this actually requires an object

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

for (movie in movieReviews) {
	console.log(`Movie: ${movie}, Score: ${movieReviews[movie]}`);
}

for (num in [ 29, 34, 583, 49 ]) {
	// What do you think the output would be here?
	// Arrays are special objects, in that the values held are values for indices.
	// So here we print the key for each value, which is the indice
	console.log(num);
}

// Lastly, note that the for..in loop loops in an arbitrary order, depending on the browser
