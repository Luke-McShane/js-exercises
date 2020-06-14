// The reason we don't use object.onclick, object.onmouseoever, etc., is because these events cannot be dynamically removed;
// furthermore, if we apply two onclick methods, then the second one applied overwrites the first whereas, using addEvenListener,
// we can invoke two methods from the same event. For example
// button1.onclick = method1;
// button1.onclick = method2;
// The onclick property will only be set to method2, overwriting the invokation of method1
//
// However, we can set invoke both methods as such
// button1.addEventListener('click', method1);
// button1.addEventListener('click', method2);

myBtn = document.querySelector('#clicker');
myBtn.addEventListener('click', () => console.log('CLICKED'));
myBtn.addEventListener('click', () => console.log('STOP CLICKING ME!'));
myBtn.addEventListener('mouseover', () => (myBtn.innerText = 'STOP HOVERING!'));
myBtn.addEventListener('mouseout', () => (myBtn.innerText = 'NOW GO AWAY!'));

window.addEventListener('scroll', () => console.log('SCROLLING'));
