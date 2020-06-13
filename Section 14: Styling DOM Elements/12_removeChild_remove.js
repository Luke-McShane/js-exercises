// We can use removeChild as a method on a parent object and pass the child object to remove it:
//    parent.removeObject(child)
const todos = document.querySelector('ul#todos');
const toRemove = todos.querySelector('.task-completed');
todos.removeChild(toRemove);

// We can also use the .remove() method, which we call directly on the object we want to remove
const alsoRemove = document.querySelector('h1');
alsoRemove.remove();
