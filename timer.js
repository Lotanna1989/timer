/* function updateTimer() {
    let timerElement = document.querySelector('[data-testid="currentUTCTime"]');
    let currentTime = new Date();
    let hours = currentTime.getUTCHours();
    let minutes = currentTime.getUTCMinutes();
    let seconds = currentTime.getUTCSeconds();
    timerElement.textContent = `${hours}:${minutes}:${seconds}`;
}

// Call the updateTimer function every second (1000 milliseconds)
setInterval(updateTimer, 1000);

// Ensure the timer is updated immediately when the page loads
updateTimer(); */


// Find the element with data-testid="currentDayOfTheWeek"
let dayElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');

// Create an array of day names
let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// Get the current day (0-6 corresponds to Sunday-Saturday)
let currentDayIndex = new Date().getDay();

// Get the name of the current day
let currentDayName = daysOfWeek[currentDayIndex];

// Update the content of the element with the current day
dayElement.textContent = currentDayName;


let timeElement = document.querySelector('[data-testid="currentUTCTime"]');

// Function to update the UTC time
function updateUTCTime() {
    let currentTime = new Date().toUTCString();
    timeElement.textContent = currentTime;
}

// Update the time immediately
updateUTCTime();

// Update the time every second (1000 milliseconds)
setInterval(updateUTCTime, 1000);