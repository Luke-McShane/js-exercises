let var1 = 'test';
let var2 = '9.99';

console.log(
	`This is what we call a '${var1}' and Kelly said "Goodbye." Also, the price of this ${var1} is $${Math.round(
		19.99 - parseFloat(var2)
	)}`
);
