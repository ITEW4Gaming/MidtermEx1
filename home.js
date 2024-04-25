document.addEventListener('DOMContentLoaded', function() {
  const menuIcon = document.querySelector('.menu-icon');
  const navbar = document.querySelector('.navbar');
  const span = document.querySelector('.navbar-logo span');
  const navbarLinks = document.querySelector('.navbar-links');
  const slideshowImages = document.querySelectorAll('.slideshow-image');

  let currentImageIndex = 0;

  function toggleAnimation() {
    slideshowImages.forEach(image => {
      image.classList.remove('animate');
    });
    slideshowImages[currentImageIndex].classList.add('animate');
    currentImageIndex = (currentImageIndex + 1) % slideshowImages.length;
  }

  setInterval(toggleAnimation, 5000);

  menuIcon.addEventListener('click', function() {
    navbarLinks.classList.toggle('active');
    navbar.classList.toggle('active');
  });

  // Function to change navbar background color on scroll
  const changeBackground = () => {
    if (window.scrollY >= 50) { // Adjusted the scroll position
      navbar.style.background = 'linear-gradient(to left, lightblue, darkblue)';
      navbar.style.transition = 'background 0.5s ease'; // Add transition for smooth color change
      span.style.color = 'white';
    } else {
      navbar.style.background = '';
      span.style.color = ''; // Reset color to default
    }
  }

  window.addEventListener('scroll', changeBackground);
});
