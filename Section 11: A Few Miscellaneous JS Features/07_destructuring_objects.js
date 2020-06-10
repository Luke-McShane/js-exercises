// While in array destructuring we unpack based on position in the array, in object destructuring we unpack
// based on the names of the object properties

const runner = {
	first: 'Eliud',
	last: 'Kipchoge',
	country: 'Kenya',
	title: 'Elder of the Order of the Golden Heart of Kenya'
};

// Here we are saying 'if you find the property with this name, take the value from it and attach it to this variable
const { first, last, country, title } = runner;

// If we want different variable names for the property values taken, we can do as such
const { first: firstName, last: lastName, country: nation, title: badassTitle } = runner;

// If we want to collect only some property values, and the rest in another variable, we can use rest parameters
// Note that the rest parameter collects the remaining values into an object
const {first, last, ...other};