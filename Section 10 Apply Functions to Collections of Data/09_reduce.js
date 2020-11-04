// The reduce method executes a 'reducer fucntion' on each element of the array, resulting in a single value
// The reducer's returned value is assigned to an accumulator argument, which is remembered and used through each iteration of the
// array, and becomes the final, single value
//
// This would return the sum of all values within arrayToReduce
// const reducedArray = arrayToReduce.reduce((accumulator, currentValue) => accumulator + currentValue)

const nums = [ 3, 4, 5, 6, 7 ];
const numsSum = nums.reduce((accumulator, currentValue) => accumulator * currentValue);
console.log(numsSum);

const grades = [ 66, 73, 93, 56, 30, 96, 24, 88, 54 ];
// Here we are using a ternary operator inside the callback function. We can make this even more concise through an implicit return
const topGrade = grades.reduce((topSoFar, current) => {
	return current > topSoFar ? current : topSoFar;
});

// Implicit return with ternary
const topGradeImplicit = grades.reduce((max, current) => (current > max ? current : max));

// Implicit return with Math.max(a, b)
const topGradeMathMax = grades.reduce((max, current) => Math.max(max, current));

console.log(topGrade);
console.log(topGradeImplicit);
console.log(topGradeMathMax);

// So, above we have shown how we can keep track of some value in the array, and we don't just have to sum
// We could find the min or max, or the longest word, or the object containing the highest value for one of its properties, for example
// We can also initialize the accumulator value.
// The reduce method can also take a second parameter (after the callback function) that initializes the accumulator value
// at a certain value
const sumPlus9000 = [ 1, 2, 3, 4, 5, 6 ].reduce((acc, cur) => acc + cur, 9000);
console.log(sumPlus9000);

//
//
// Below we are initializing the accumulator as an empty object.
// The task is to create an object that stores the tally of each Y and N vote
const votes = [
	'Y',
	'Y',
	'N',
	'Y',
	'N',
	'N',
	'Y',
	'Y',
	'Y',
	'N',
	'Y',
	'N',
	'N',
	'Y',
	'Y',
	'Y',
	'N',
	'Y',
	'N',
	'N',
	'Y',
	'Y',
	'Y'
];

// So here we are saying that, if tally[val] doesn't exist, initialize it to 1, otherwise increment it
// After iterating through all elements, return the object in its finaly state. Recall that the object will be returned after
// each iteration
// So tally is the object, that starts empty, and then, in the first iteration we are checking tally['Y'], which doesn't exist,
// and so we initialize it
const tally = votes.reduce((tally, val) => {
	tally[val] !== undefined ? tally[val]++ : (tally[val] = 1);
	return tally;
}, {});

console.log(tally);

// We can complete the above using boolean logic.
// When there is not an initialized property, the boolean logic is equating '(undefined || 0)', which results in 0, and we thus
// initialize the property to 0 + 1
const anotherTally = votes.reduce((tally, val) => {
	tally[val] = (tally[val] || 0) + 1;
	return tally;
}, {});

console.log(anotherTally);
