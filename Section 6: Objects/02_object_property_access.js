// We can access properties of objects using two methods: Bracket notation and dot notation
// The dot notation is used to access properties where the property names are valid JavaScript identifiers.
// So, for example, '55apples' or 'my name' would not be accessible using the dot notation.

// The bracket notation is used to access any property name, for whatever is inside the brackets is converted to a
// string and used to access the corresponding property name. So, we can do things like object['my friend'] and
// object[' 4 5'], but these could not be achieved with the dot notation.

// With bracket notation, however, whatever we want to access we must put in quotes (unless a variable exists with a value
// equal to a key), otherwise the browser's compiler will think we're trying to access a variable

// Strive to use the dot notation whenever possible, for it is more elegant. Use the bracket notation only when we have
// a variable that is used to access an object's properties or the key names are not valid JavaScript identifiers

myObj = {
	' ': 'We can even access a blank space using bracket notation',
	'21 doggos': 'so many dogs!'
};

console.log(myObj[' ']);

// See the below example of using a variable name to access an object's property using bracket notation.
// If we were to use dot notation with the variable name, it would simply convert the variable name into a string and
// look directly in the object for this key name

palette = {
	red: '#eb4d4b',
	yellow: '#f9ca24',
	blue: '#30336b'
};

let mysteryColour = 'blue';

console.log(palette.mysteryColour); // Returns 'undefined' as there is no property named 'mysteryColour'
console.log(palette[mysteryColour]); // Succeeds as the value in the variable 'mysteryColour' is a valid key name

// We can also do the following, because whatever is within the brackets is evaluated before being used to locate the property
console.log(palette['r' + 'e' + 'd']);

const nums = {
	firstNum: 1,
	lastNum: 99,
	anotherNum: 43
};

// Here is how we can add to an object and update object property values
nums.someOtherNum = 32;
nums['yetAnotherNum'] = 84;
nums.firstNum += 2;
nums.firstNum--;
nums.firstNum--;

// We can use objects within arrays, and arrays within objects
let customers = [
	{
		name: 'Sandy',
		address: 'Nice address',
		yearsAsCustomer: 2
	},
	{
		name: 'Mark',
		address: 'Cool address',
		yearsAsCustomer: 1
	},
	{
		name: 'Tim',
		address: 'Crazy address',
		yearsAsCustomer: 4
	}
];

console.log(`Tim's address is a '${customers[2].address}'`);

// We can also set another variable to an object already defined, even if using const, this is because the variable
// uses a reference
// This also helps explain array and object equality. Evaluating [] === [] will return false, because each array is
// a reference to a different place in memory. For these to evaluate as true, we would do:

let myArr = [];
let myOtherArr = myArr;
console.log(myArr === myOtherArr);
