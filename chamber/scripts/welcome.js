document.addEventListener('DOMContentLoaded', function() {
    const lastVisit = localStorage.getItem('lastVisit');
    const currentDate = Date.now();
    const oneDay = 24 * 60 * 60 * 1000; // Number of milliseconds in a day

    if (!lastVisit) {
        localStorage.setItem('lastVisit', currentDate);
        displayWelcomeMessage('Welcome! Let us know if you have any questions.');
    } else {
        const daysSinceLastVisit = Math.floor((currentDate - lastVisit) / oneDay);
        if (daysSinceLastVisit === 0) {
            displayWelcomeMessage('Back so soon! Awesome!');
        } else {
            const message = daysSinceLastVisit === 1 ? `You last visited 1 day ago.` : `You last visited ${daysSinceLastVisit} days ago.`;
            displayWelcomeMessage(message);
        }
        localStorage.setItem('lastVisit', currentDate);
    }

    function displayWelcomeMessage(message) {
        const welcomeMessage = document.querySelector('.welcome-message');
        welcomeMessage.textContent = message;
    }
});
