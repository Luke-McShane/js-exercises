// One way that SHOULDN'T be used when adding events is to do it inline.
// One example of doing this would be such
// <button onclick="alert('BUTTON CLICKED')">SUBMIT</button>

// Another method that SHOULDN'T be used is such
const myBtn = document.querySelector('#clicker');
myBtn.onclick = () => alert('HELLO');
