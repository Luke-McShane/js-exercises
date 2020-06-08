// This is how we define a basic function.
function rollDice() {
	let roll = Math.floor(Math.random() * 6) + 1;
	console.log(`Rolled: ${roll}`);
}

// Here we are passing in an argument, which holds the same rules as naming variables
function throwDice(numRolls) {
	for (i = 0; i <= numRolls; i++) rollDice();
}

throwDice(3);

// We can pass multiple arguments to a function.
// When we return something from a function, we exit the function and no code after the return statement is run
function add(x, y) {
	return x + y;
	console.log('THIS CODE WILL NEVER RUN');
}

// If evaluating something simply, we can return true or false using a single line.
function isBlue(colour) {
	return colour.toLowerCase() === 'blue';
}

console.log(isBlue('purple'));
console.log(isBlue('blue'));
