// Find returns the first element of the collection being operated on that evaluates to true in the inner function
movies = [ 'The Fantastic Mr. Fox', 'Mr. and Mrs. Smith', 'Mrs. Doubtfire', 'Mr. Deeds' ];

// So here we are iterating through each element in the movies array and performing the inner .indexOf method in each element
// The first element that satisfies the condition 'movie.indexOf('Mrs') !== -1' is assigned to the movie constant
const movie = movies.find((movie) => movie.indexOf('Mrs') !== -1);
console.log(movie);
