// We can use destructuring in parameters by using the curly braces to signify that we expect to be passed an object.
// Within these curly braces we can declare the properties we are interested in accessing for the function

// In the getCountry function, for example, we are saying 'I expect an object, and from that object I only want the property
// names 'country', and then I want to return this value
const getCountry = ({ country }) => country;
const getName = ({ first, last }) => `${first} ${last}`;
const printInfo = (name, country) => console.log(`${name} is from ${country}`);

const runners = [
	{
		first: 'Eliud',
		last: 'Kipchoge',
		country: 'Kenya'
	},
	{
		first: 'Timmy',
		last: 'Jones',
		country: 'Wales'
	},
	{
		first: 'Rupert',
		last: 'Stringer',
		country: 'China'
	}
];

// Here we are accessing the 'runners' array and passing different objects as arguments
const firstCountry = getCountry(runners[0]);
const secondCountry = getCountry(runners[1]);
const thirdCountry = getCountry(runners[2]);

const firstName = getName(runners[0]);
const secondName = getName(runners[1]);
const thirdName = getName(runners[2]);

printInfo(firstName, firstCountry);
printInfo(secondName, secondCountry);
printInfo(thirdName, thirdCountry);
