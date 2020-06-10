const getStats = (arr) => {
	const max = Math.max(...arr);
	const min = Math.min(...arr);
	const sum = arr.reduce((acc, cur) => acc + cur);
	const avg = sum / arr.length;
	// Usually we would have to return the object as such
	// return { max: max, min: min, sum: sum, avg: avg };

	// However, object shorthand allows us to use the following when the key we want to create is the same name as the variable
	return { max, min, sum, avg };
};

const reviews = [ 4.5, 5.0, 3.44, 2.8, 3.5, 4.0, 3.5 ];

const stats = getStats(reviews);
console.log(stats);
