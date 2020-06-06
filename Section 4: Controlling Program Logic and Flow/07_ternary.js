let userAttempt = 'test123';
let password = 'test321';

// The first part is the expression we are evaluating; the second part is the True statement;
// the last part is the Fail statement
userAttempt === password ? console.log('Login Successful!') : console.log('Login Failed!');

let status = 'online';
// let colour;

// if (status === 'offline') {
// 	colour = 'Red';
// } else if (status === 'online') {
// 	status = 'Green';
// }

// This is the ternary shorthand to set a variable's value
// Here we are saying: Let the value of colour be equal to the result of this evaluation,
// where the result of the evaluation is determined within the ternary operation
let colour = status === 'offline' ? 'Red' : 'Green';

console.log(colour);
