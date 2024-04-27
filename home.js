document.addEventListener('DOMContentLoaded', function() {
  // Select the loading overlay
  const loadingOverlay = document.querySelector('.loading-overlay');

  // Hide loading animation with a 3-second delay
  setTimeout(function() {
    loadingOverlay.style.display = 'none'; // Hide loading overlay
  }, 2000); // 3000 milliseconds = 3 seconds

  // Your existing JavaScript code below
  const menuIcon = document.querySelector('.menu-icon');
  const navbar = document.querySelector('.navbar');
  const span = document.querySelector('.navbar-logo span');
  const navbarLinks = document.querySelector('.navbar-links');
  const slideshowImages = document.querySelectorAll('.slideshow-image');
  const quoteText = document.querySelector('.quote-text');
  const destinationContainer = document.querySelector('.destination-container');

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
  setInterval(toggleQuoteAnimation, 5000);

  const changeBackground = () => {
    if (window.scrollY >= 300) {
      navbar.style.background = 'linear-gradient(to left, lightblue, darkblue)';
      navbar.style.transition = 'background 0.5s ease';
      span.style.color = 'white';
      navbar.style.animation = 'navbarAnimation 0.5s ease'; // Add animation to navbar
    } else {
      navbar.style.background = '';
      span.style.color = '';
      navbar.style.animation = '';
    }
  }


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

  setInterval(changeQuote, 5000);

  menuIcon.addEventListener('click', function() {
    navbarLinks.classList.toggle('active');
    navbar.classList.toggle('active');
  });

  window.addEventListener('scroll', changeBackground);

   function handleButtonClick() {
    // Calculate the offset to scroll slightly above the destination container
    const offset = 45; // Adjust this value as needed
    const destinationContainerTop = destinationContainer.offsetTop;
    const scrollToPosition = destinationContainerTop - offset;

    // Scroll to the calculated position with animation
    window.scrollTo({
      top: scrollToPosition,
      behavior: 'smooth'
    });

    // Apply animation to the destination container
    destinationContainer.style.animation = 'scrollAnimation 0.5s ease'; // Adjust animation duration as needed

    // Reset animation after completion
    setTimeout(() => {
      destinationContainer.style.animation = '';
    }, 500); // Adjust timeout duration to match animation duration
  }


  const letsGoButton = document.querySelector('.btn');
  letsGoButton.addEventListener('click', handleButtonClick);
});
