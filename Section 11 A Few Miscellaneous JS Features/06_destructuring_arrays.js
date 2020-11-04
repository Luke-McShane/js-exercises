// Destructuring is a short, clean syntax to unpack values from arrays and properties from objects, into distinct variables
const raceResults = [
	'Eliud Kipchoge',
	'Feyisa Lelisa',
	'Galen Rupp',
	'Ghirmay Ghebreslassie',
	'Alphonce Simbu',
	'Jared Ward'
];

// Before destructuring, we would take the first three values into separate variables as such
// const gold = raceResults[0];
// const silver = raceResults[1];
// const bronze = raceResults[2];

// With destructuring, however, we can extract corresponding array values as such
const [ gold, silver, bronze ] = raceResults;

// If we want the first and fourth indices, however, how should we do this?
// Well we can simply add commas to represent the values we want to skip
const [ firstPlace, , , fourthPlace ] = raceResults;

// We can combine destructuring with rest parameters to collect some elements and then assign the remaining elements
// to a separate array
const [ first, second, third, ...everythingElse ] = raceResults;

// Finally, we can still skip elements while using rest parameters:
const [ goldMedal, , , ...nonePodium ] = raceResults;
