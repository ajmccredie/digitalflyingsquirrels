// === DOM READY ===
document.addEventListener("DOMContentLoaded", () => {
  // === Header Shrink on Scroll ===
  const header = document.querySelector(".hero");
  if (header) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        header.classList.add("shrink");
      } else {
        header.classList.remove("shrink");
      }
    });
  }

  // === Form Submit Alert ===
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", () => {
      alert("Thank you! Your message has been sent.");
    });
  }

  // === Swiper A (Social Media Carousel with Video Playback) ===
  const swiperA = new Swiper(".mySwiperA", {
    loop: true,
    centeredSlides: true,
    slidesPerView: "auto",
    spaceBetween: 30,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination-a",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next-a",
      prevEl: ".swiper-button-prev-a",
    },
    on: {
      slideChangeTransitionEnd: function () {
        // Pause all videos
        document.querySelectorAll(".mySwiperA video").forEach(video => {
          video.pause();
        });

        // Play video in active slide
        const activeSlide = document.querySelector(".mySwiperA .swiper-slide-active");
        const video = activeSlide.querySelector("video");
        if (video) {
          video.play();
        }
      },
    },
  });

  // === Swiper B (Portfolio Carousel) ===
  new Swiper(".mySwiperB", {
    loop: true,
    centeredSlides: true,
    slidesPerView: "auto",
    spaceBetween: 30,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination-b",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next-b",
      prevEl: ".swiper-button-prev-b",
    },
  });
});
