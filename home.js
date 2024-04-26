document.addEventListener('DOMContentLoaded', function() {
  const menuIcon = document.querySelector('.menu-icon');
  const navbar = document.querySelector('.navbar');
  const span = document.querySelector('.navbar-logo span');
  const navbarLinks = document.querySelector('.navbar-links');
  const slideshowImages = document.querySelectorAll('.slideshow-image');
  const quoteText = document.querySelector('.quote-text');

  let currentImageIndex = 0;

  function toggleAnimation() {
    slideshowImages.forEach(image => {
      image.classList.remove('animate');
    });
    slideshowImages[currentImageIndex].classList.add('animate');
    currentImageIndex = (currentImageIndex + 1) % slideshowImages.length;
  }

  function toggleQuoteAnimation() {
    quoteText.classList.toggle('animate');
  }

  setInterval(toggleAnimation, 5000);
  setInterval(toggleQuoteAnimation, 5000); // Add interval for quote animation

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

  // Function to change quote text
  const changeQuote = () => {
    const quotes = [
      "The world is a book, and those who do not travel read only one page. - Saint Augustine",
      "Traveling – it leaves you speechless, then turns you into a storyteller. - Ibn Battuta",
      "The journey of a thousand miles begins with a single step. - Lao Tzu",
      "Not all those who wander are lost. - J.R.R. Tolkien",
      "Adventure is worthwhile. - Aesop",
      "To travel is to discover that everyone is wrong about other countries. - Aldous Huxley",
      "Travel far enough, you meet yourself. - David Mitchell",
      "Travel makes one modest. You see what a tiny place you occupy in the world. - Gustave Flaubert",
      "A journey is best measured in friends, rather than miles. - Tim Cahill",
      "Once a year, go someplace you’ve never been before. - Dalai Lama"
    ];
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteText.innerHTML = `<em>${quotes[randomIndex]}</em>`;
  }

  setInterval(changeQuote, 5000); // Change quote every 5 seconds

  menuIcon.addEventListener('click', function() {
    navbarLinks.classList.toggle('active');
    navbar.classList.toggle('active');
  });

  window.addEventListener('scroll', changeBackground);
});
