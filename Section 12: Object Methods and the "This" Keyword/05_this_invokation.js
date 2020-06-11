// The value of 'this' depends on the invokation context of the function it is used in

const person = {
	first: 'Luke',
	last: 'McShane',
	nickname: 'Shaney',
	fullName() {
		const { first, last, nickname } = this;
		console.log(`${first} ${last}, AKA ${nickname}`);
	},

	printBio() {
		console.log(this);
		const fullName = this.fullName();
		console.log(`${fullName} is a person`);
	},

	laugh: () => {
		console.log(this);
		console.log(`${this.nickname} is laughing`);
	}
};

// Here we are simply creating a variable that points to the method within the person object
// When 'this.fullName()' is called from within this method, we are given an error that tells us that it is not a function
// Rather, because we are calling the method printBio() from outside an object, the 'this' keyword now points to the window object
const printBio = person.printBio;
printBio();

// Even though we are calling this method from the parent object person, the this keyword still points to the window object
// This is because arrow functions do not get their own 'this' keyword, and always point to the global context - that is,
// unless we use things like binding
person.laugh();
