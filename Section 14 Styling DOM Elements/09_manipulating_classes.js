// If we have a custom CSS class, we can apply it using JS to an element(s) to apply a multitude of styles simultaneously
const li = document.querySelector('#todos .todo');

// We could add the class as below, commented, but the better way is to use .classList.add
// li.setAttribute('class', 'todo task-complete');
// li.classList.add('task-complete');

// The best way, however, is to use .classList.toggle, which checks if the classList already contains the specified class and, if so
// removes it and, if not, adds the class to the classList
li.classList.toggle('task-complete');
// If the class is already there, and toggle removes it, then toggle returns 'false'.
// If the class is not there, and toggle adds it, then toggle returns 'true'.
