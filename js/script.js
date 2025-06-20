// === Shrink header on scroll ===
document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector('.hero');
  if (!header) return;

  window.addEventListener("scroll", () => {
    // DEBUG LOG
    console.log("Scroll event:", window.scrollY);
    if (window.scrollY > 50) {
      header.classList.add('shrink');
    } else {
      header.classList.remove('shrink');
    }
  });
});

// === Form submit alert ===
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", () => {
      alert("Thank you! Your message has been sent.");
    });
  }
});

// === Swiper A Init ===
document.addEventListener("DOMContentLoaded", () => {
  new Swiper('.mySwiperA', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination-a',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next-a',
      prevEl: '.swiper-button-prev-a',
    },
  });

  new Swiper('.mySwiperB', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination-b',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next-b',
      prevEl: '.swiper-button-prev-b',
    },
  });
});
