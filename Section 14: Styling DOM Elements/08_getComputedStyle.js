// The getComputedStyle method returns the actual styles currently taking place in the DOM
// Rather than getting just what is defined inline, getComputedStyle takes into consideration all computations of styles, which
// include stylesheets being applied
// The returned style is a live object, meaning that it updates in real time, automatically whenever the style is changed
// If we were to hover and a style is applied on hover, then the style object will take this into account

const h1 = document.querySelector('h1');
console.log(h1.style.backgroundColor);

console.log(getComputedStyle(h1).backgroundColor);
