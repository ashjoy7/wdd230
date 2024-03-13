// Get the visit counter element
const visitCounter = document.getElementById('visitCounter');

// Initialize the visit count from localStorage or default to 0
let count = localStorage.getItem('visitCount');
if (!count) {
    count = 0;
}

// Update the visit counter element
visitCounter.textContent = count;

// Increment the visit count and update localStorage
count++;
localStorage.setItem('visitCount', count);
