document.addEventListener("DOMContentLoaded", function() {
    let lazyImages = document.querySelectorAll('.lazy');

    const lazyLoad = target => {
        const io = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    const src = img.getAttribute('data-src');
                    img.setAttribute('src', src);
                    img.classList.add('fade-in');
                    img.classList.remove('lazy');
                    observer.disconnect();
                }
            });
        });

        io.observe(target);
    };

    lazyImages.forEach(lazyLoad);

    // Last modified date
    const lastModified = new Date(document.lastModified);
    const lastModifiedElement = document.getElementById('lastModified');
    lastModifiedElement.textContent = `Last Modified: ${lastModified.toLocaleString()}`;
});
