const form = document.querySelector("form");
form.addEventListener("submit", () => {
  alert("Thank you! Your message has been sent.");
});


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

window.addEventListener('scroll', () => {
  const header = document.querySelector('.sticky-header');
  if (window.scrollY > 50) {
    header.style.padding = '30px 0';
  } else {
    header.style.padding = '150px 0 100px';
  }
});
