// The 'this' keyword is a reference to an object, which represents the current execution scope
// It returns an object
// When we use 'this', for example, in a function in global scope, then it refers to the window, which contains a load of
// functions we can call
// When we declare a var in global scope, that property is added to the window object, and we can call it throught window.varName
//
// The sayHi() function is a method that belongs to the window object, while the fullName() method belongs to the person object,
// hence why there are two different results for 'this', the former being the window object, the latter being the person const.
// This is because 'this' pertains to the immediate parent object

// The 'this' keyword thus allows us to have direct access to contents in the parent object. When used inside a method,
// it means that that method has access to other properties and methods within that same object
function sayHi() {
	console.log(this);
}

const person = {
	first: 'Luke',
	last: 'McShane',
	nickname: 'Shaney',
	fullName() {
		// This is just some destructuring to save us typing out this.first, this.last, and this.nickname below
		const { first, last, nickname } = this;
		console.log(`${first} ${last}, AKA ${nickname}`);
	},

	printBio() {
		// We must reference 'this' when calling a method within the object, or else the compiler will not know where we are
		// looking, and it will state that the method is not defined
		const fullName = this.fullName();
		console.log(`${fullName} is a person`);
	}
};
