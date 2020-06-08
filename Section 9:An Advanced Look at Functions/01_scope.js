// The let and const keywords are used to define variables in one scope, and their corresponding values
// cannot be redefined from a scope that can access their values. A scope defined within one scope can access
// a let or const value from an encapsulating scope, but only we cannot declare multiple variables of the same name
// in the same scope with const or let.

// var is the weakest signal, in that a variable using var may be redeclared in the same scope, and may also be
// accessed from another scope

let i = 123;
let j = 5;

// Although i has already been declared, we can redeclare it here due to its being in a different scope
for (let i = 0; i < 5; i++) {
	console.log(i);
	console.log(j);
	var k = 23;
}

for (let j = 10; j < 15; j++) {
	// We have defined k in a different scope, but with var, so it is here accessibe.
	// We then redeclare k multiple times within the same scope, which is legal behaviour
	console.log(k);
	var k = 24;
	var k = 25;
}
