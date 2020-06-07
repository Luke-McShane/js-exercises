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
