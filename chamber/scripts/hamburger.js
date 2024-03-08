document.addEventListener("DOMContentLoaded", function () {
    // Select elements
    const nav = document.querySelector('nav');
    const hamburgerBtn = document.getElementById('hamburger'); // Get the hamburger button

    // Add click event listener to hamburger button
    hamburgerBtn.addEventListener('click', function () {
        // Toggle visibility of nav
        nav.classList.toggle('active'); // Change 'show' to 'active'
    });
});
