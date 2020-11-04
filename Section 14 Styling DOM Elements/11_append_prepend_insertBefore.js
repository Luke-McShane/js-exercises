const parentUL = document.querySelector('#todos');

const newLI = document.createElement('li');
newLI.innerText = 'Send that email';

// Here we append the newLI to the bottom of the list of children
parentUL.appendChild(newLI);

// If we use .insertBefore, we need to use the method on the object which will have inserted the new object, then we need to pass
// in two arguments, the first being the element we want to insert, the second being the element (contained within the parent)
// we want to insert the object before
// If we have already inserted the object (as above), inserted as done below will override this initial insertion, and there will
// still be only one instance of the object on the page
const firstLI = document.querySelector('ul#todos li.todo');
parentUL.insertBefore(newLI, firstLI);

// We can also insert the element before the last element
parentUL.insertBefore(newLI, parentUL.querySelectorAll('.todo')[parentUL.querySelectorAll('.todo').length - 1]);

// We can also use insertAdjacentElement
// targetElement.insertAdjacentElement(position, element);
// The 'position' parameter must be a string of:
//    'beforebegin' - before the targetElement itself;
//    'afterbegin' - just inside the targetElement, before its first child
//    'beforeend' - just inside the targetElement, after its last child
//    'afterend' - after the targetElement itself
//
// For visualization:
// <!-- beforebegin -->
/* <p> */
/* <!-- afterbegin --> */
//   foo
/* <!-- beforeend --> */
// </p>
// <!-- afterend -->
const iBeforeBegin = document.createElement('i');
iBeforeBegin.innerText = 'I AM BEFORE BEGIN';

const iAfterBegin = document.createElement('i');
iAfterBegin.innerText = 'I AM AFTER BEGIN';

const iBeforeEnd = document.createElement('i');
iBeforeEnd.innerText = 'I AM BEFORE END';

const iAfterEnd = document.createElement('i');
iAfterEnd.innerText = 'I AM AFTER END';

const mainPara = document.querySelector('.main');
mainPara.insertAdjacentElement('beforebegin', iBeforeBegin);
mainPara.insertAdjacentElement('afterbegin', iAfterBegin);
mainPara.insertAdjacentElement('beforeend', iBeforeEnd);
mainPara.insertAdjacentElement('afterend', iAfterEnd);

// Another easy way to append children is to use the .append method; we can also use the prepend method to add the object to
// the beginning of the parent object.
// These methods allow use to append multiple object simultaneously.
const iPrepend1 = document.createElement('i');
iPrepend1.innerText = 'I AM PREPENDED';
const iPrepend2 = document.createElement('i');
iPrepend2.innerText = 'I AM ALSO PREPEND';

const iAppend1 = document.createElement('i');
iAppend1.innerText = 'I AM APPENDED';
const iAppend2 = document.createElement('i');
iAppend2.innerText = 'I AM ALSO APPENDED';

mainPara.prepend(iPrepend1, iPrepend2);
mainPara.append(iAppend1, iAppend2);
