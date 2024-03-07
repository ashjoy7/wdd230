document.addEventListener("DOMContentLoaded", function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navList = document.querySelector('.nav-list');

    navToggle.addEventListener('change', function() {
        if (this.checked) {
            navList.classList.add('show');
        } else {
            navList.classList.remove('show');
        }
    });
});
