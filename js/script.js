// Show alert on form submit
const form = document.querySelector("form");
form.addEventListener("submit", () => {
  alert("Thank you! Your message has been sent.");
});

// Initialize Swiper carousel
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// Header scroll behavior
window.addEventListener('scroll', () => {
  const header = document.querySelector('.hero');

  if (window.scrollY > 50) {
    header.classList.add('shrink');
  } else {
    header.classList.remove('shrink');
  }
});
