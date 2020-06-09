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
