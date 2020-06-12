// The innerHTML property contains all the HTML contained within an element.
// So, if we return the innerHTML of a paragraph (given it contains no elemens within), the property will simply contain the
// text. However, if, for example, we return the innerHTML of a UL, then it will return all the HTML of the list elements along
// with the li innerText
// So we can actually change what elements contain through manipulating this property
const paraMain = document.getElementsByClassName('main')[0];
paraMain.innerHTML += '<b>I AM A BOLD TAG. A NEW OBJECT HAS BEEN ADDED TO THE PARENT</b>';

// If we do the same, trying to add content using innerText, then the tags are not parsed, and the HTML we tried to add is not parsed
// as HTML and the tags just end up getting thrown into the HTML as text
// Also, note that this takes away the tags from the prior statement
paraMain.innerText += '<b>I AM A BOLD TAG. A NEW OBJECT HAS BEEN ADDED TO THE PARENT</b>';
