const durationInput = document.querySelector('#time');
const playButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const circle = document.querySelector('circle');

const perimeter = circle.getAttribute('r') * Math.PI * 2;
circle.setAttribute('stroke-dasharray', perimeter);
let duration;
let offset;

// We pass in an object that holds a number of callback functions
// Doing this saves us from adding such methods inside the Timer class, which would add unnecessary complexity
const timer = new Timer(durationInput, playButton, pauseButton, circle, {
  onStart(totalDuration) {
    duration = totalDuration;
  },
  onStop() {
    console.log('Timer stopped!')
  },
  onTick(timeRemaining) {
    offset = (perimeter * timeRemaining / duration) - perimeter;
    console.log(`Perimeter: ${perimeter}, Time Remaining: ${timeRemaining}, Duration: ${duration}, Offset: ${offset}`);
    circle.setAttribute('stroke-dashoffset', offset);
  }
});