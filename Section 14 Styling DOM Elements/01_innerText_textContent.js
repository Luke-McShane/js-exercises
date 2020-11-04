// The innerText property contains all the text content of the selected element and all descended elements
// So if we return the innerText property of the body of the HTML, then it will return all text contained contained within the body tags
// Remember that these are properties of objects, not methods

const ul = document.querySelector('ul');
const ulInnerText = ul.innerText;
console.dir(ulInnerText);

// Here we save all the text content of the webpage to the allText variable
const allText = document.querySelector('body').innerText;

// Here we select and style the first child of the selected ul
ul.querySelector('.special:first-child').innerText = "I've been manipulated!";

// The textContent property is different in that it returns all text including text within script tags and text that has been styled,
// while innerText contains text only visible on the webpage. So we could have text that is within a script tag within an element
// (not a good idea to do anyways) and text that has been set to display: none, and the textContent will still display this text.
// Furthermore, textContent preserves the styling of the text, just as it is in HTML - so if we have awkward line breaks, etc., these
// are preserved within textContent
const testPara = document.getElementById('test-para');
const testParaTextContent = testPara.textContent;
const testParaInnerText = testPara.innerText;
console.log(testParaTextContent);
console.log(testParaInnerText);
