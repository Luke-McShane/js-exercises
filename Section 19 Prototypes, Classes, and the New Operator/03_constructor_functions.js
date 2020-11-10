// From the last exercise, you will note that each new colour object got its own set of functions, rgb and hex
// This means that, for each object created, we are creating an entirely new set of methods for it, which is
// inefficient. We can prove this by checking the equality of two of the functions, and seeing that they are not
// equal. Whereas, if we had string1.slice === string2.slice the result would be true, because they are just inheriting
// the method from a constructor class, which you can see in the string's __proto__ property