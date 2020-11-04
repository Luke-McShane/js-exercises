let password = 'mike1992';

if (password.length >= 6) {
	if (password.indexOf(' ') === -1) {
		console.log('Valid Password');
	} else {
		console.log('Your password cannot contain spaces');
	}
} else {
	console.log('Please enter a password of 6 characters or more, without spaces ');
}
