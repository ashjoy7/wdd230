document.addEventListener("DOMContentLoaded", function() {
  const images = document.querySelectorAll('.lazyload');

  const lazyLoad = function() {
      images.forEach(image => {
          if (image.getAttribute('data-src') && image.getBoundingClientRect().top <= window.innerHeight && image.getBoundingClientRect().bottom >= 0) {
              image.src = image.getAttribute('data-src');
              image.removeAttribute('data-src');
              image.onload = function() {
                  image.style.opacity = 1;
              };
          }
      });
  };

  window.addEventListener('scroll', lazyLoad);

  // Initial load check
  lazyLoad();
});
