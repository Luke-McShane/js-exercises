// We can get and set attributes of elements, given they exist
// Although we can often use object.property, such as when we want to get the '.value' or '.src', not all attributes we can
// get through this shorthand notation.
// Thus we use getAttribute and setAttribute
// Furthermore, the getAttribute method returns the attribute of the DOM element, while element.property returns the property.
// These are indeed two different things. See the example with the 'a' tag to see the difference
const inputRange = document.querySelector("input[type='range']");
const inputRangeType = inputRange.getAttribute('type');
const inputRangeMin = inputRange.getAttribute('min');
const inputRangeMax = inputRange.getAttribute('max');
const inputRangeStep = inputRange.getAttribute('step');

console.log(inputRange.value);
inputRange.setAttribute('min', -800);
console.log(inputRange.value);

const test = document.querySelector('#nowhere');

// The first example shows what the DOM returns, while the second example shows the exact property as defined in the HTML
console.log(test.href);
console.log(test.getAttribute('href'));
