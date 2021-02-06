'use strict';

console.log('Hello there.');
console.log('General Kenobi...');

var distance = 0;

// Initialize time-to input to next New Years Day.
var currentTime = new Date();
var nextYear = currentTime.getFullYear() + 1;
if (localStorage.getItem('time-to') === null) {
    localStorage.setItem('time-to', `${nextYear}-01-01T00:00`);
}

var timeTo = localStorage.getItem('time-to');
document.getElementById('time-to').value = timeTo;


function handleChange(value) {
    timeTo = value;
    localStorage.setItem('time-to', timeTo);
}

var x = setInterval(() => {
    // Get current date and time.
    var now = new Date().getTime();

    // Get the input's value
    var countdownDate = new Date(timeTo);

    // Calculate distance between now and the count down date
    var distance = countdownDate - now;

    // Calculate days, hours, minutes and seconds.
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("clock-days").innerHTML = days
    document.getElementById("clock-hours").innerHTML = hours
    document.getElementById("clock-minutes").innerHTML = minutes
    document.getElementById("clock-seconds").innerHTML = seconds
}, 1000);