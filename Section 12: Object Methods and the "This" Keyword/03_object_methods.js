// We can add functions to objects, and they thus become methods.
// We can define a method as below, but in the second example we see how we can use shorthand to define the method
const auth = {
	login: function() {
		console.log('LOGGED IN');
	},
	logout: function() {
		console.log('LOGGED OUT');
	}
};

const auth2 = {
	login() {
		console.log('LOGGED IN');
	},
	logout() {
		console.log('LOGGED OUT');
	}
};
