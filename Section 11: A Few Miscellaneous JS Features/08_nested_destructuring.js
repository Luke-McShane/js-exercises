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

// We can access a nested object by putting in the curly braces to indicate we want to be within the object
// Here we skip the first value (which is an object) using the comma, then state we want to go within the object using
// the curly braces, then we state which property we want to access, and then we set the variable to be timmyCountry
const [ , { country: timmyCountry } ] = runners;
