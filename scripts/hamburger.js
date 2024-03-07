document.addEventListener("DOMContentLoaded", function () {
    // Select elements
    const nav = document.querySelector('nav');
    const hamburgerBtn = document.createElement('button');
    hamburgerBtn.innerHTML = '&#8801;'; // Hamburger icon

    // Append hamburger button to header
    document.querySelector('header').appendChild(hamburgerBtn);

    // Add click event listener to hamburger button
    hamburgerBtn.addEventListener('click', function () {
        // Toggle visibility of nav
        nav.classList.toggle('show');
    });
});
