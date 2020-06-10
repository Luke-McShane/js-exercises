// The 'this' keyword is a reference to an object, which represents the current execution scope
// It returns an object
// When we use 'this', for example, in a function in global scope, then it refers to the window, which contains a load of
// functions we can call
// When we declare a var in global scope, that property is added to the window object, and we can call it throught window.varName
//
// The sayHi() function is a method that belongs to the window object, while the fullName() method belongs to the person object,
// hence why there are two different results for 'this', the former being the window object, the latter being the person const.
// This is because 'this' pertains to the immediate parent object
function sayHi() {
	console.log(this);
}

const person = {
	first: 'Luke',
	last: 'McShane',
	nickname: 'Shaney',
	fullName() {
		console.log(this);
	}
};
