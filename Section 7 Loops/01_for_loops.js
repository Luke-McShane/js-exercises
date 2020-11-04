// This is the basic syntax for a for loop.
// Remember we can also go 'backwards', as in decrementing a value until the statement is no longer valid

for (i = 25; i >= 0; i -= 5) {
	console.log(i);
}

// We can access objects and arrays within loops
const myStudents = [
	{
		name: 'Sally',
		score: 92,
		favSubject: 'Science'
	},

	{
		name: 'Tom',
		score: 32,
		favSubject: 'Maths'
	},

	{
		name: 'Millie',
		score: 54,
		favSubject: 'Music'
	}
];

let currentStudent;
let totalScore = 0;
for (i = 0; i <= myStudents.length - 1; i++) {
	currentStudent = myStudents[i];
	console.log(`The score for 
    ${currentStudent.name} is
    ${currentStudent.score}, and this student's favourite subject is
    ${currentStudent.favSubject}`);
	totalScore += currentStudent.score;
}

console.log(`The average score is ${totalScore / myStudents.length}`);

// Nested loops example

let table = [ [ 2, 8, 16, 4 ], [ 64, 128, 2, 8 ], [ 16, 256, 512, 2 ], [ 16, 32, 16, 512 ] ];

let tableScore = 0;
for (i = 0; i < table.length; i++) {
	console.log(i);
	for (j = 0; j < table[i].length; j++) {
		console.log('  ' + j);
		tableScore += table[i][j];
	}
}

console.log(`Total score from table: ${tableScore}`);
