// This is how we create a basic object. This is the same as a dictionary, which
// is the name for objects in other languages, such as Python. We create a object
// through the curly braces and by defining key-value pairs, which can store any
// data type, including other objects. We separate object keys with commas

// Furthermore, objects are not directly stored in the variable, but instead, as with
// arrays, the pointer is stored in the variable. This means that we can use const whenever
// defining an object, given we don't reassign the variable to a new object

// You will note that the key doesn't appear to be of any data type, and this is because
// all keys (except symbols, which will be looked at later) are automatically converted
// into strings

const myObj = {
	name: 'Luke McShane',
	age: 23,
	sex: 'male',
	ukCitizen: true,
	crimesCommited: null,

	// We can set keys as numbers, for the key will still be converted into a string.
	// However, this can make accessing the value through the '.' awkward (myObj.45 will return an error)
	45: 'forty five'
};

console.log(`Your name is ${myObj.name}`);
console.log(`Your age is ${myObj.age}`);
console.log(`Your sex is ${myObj.sex}`);
