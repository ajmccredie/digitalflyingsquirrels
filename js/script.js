document.addEventListener("DOMContentLoaded", () => {
  // === Shrink Header on Scroll ===
  const header = document.querySelector(".hero");
  if (header) {
    window.addEventListener("scroll", () => {
      header.classList.toggle("shrink", window.scrollY > 50);
    });
  }

  // === Form Submission Feedback ===
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", () => {
      alert("Thank you! Your message has been sent.");
    });
  }

  // === Swiper A: With Video Playback ===
  new Swiper(".mySwiperA", {
    loop: true,
    centeredSlides: true,
    slidesPerView: 3,
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
      slideChangeTransitionEnd() {
        document.querySelectorAll(".mySwiperA video").forEach((vid) => vid.pause());
        const activeVideo = document.querySelector(".mySwiperA .swiper-slide-active video");
        if (activeVideo) activeVideo.play();
      },
    },
  });

  // === Swiper B: Project Showcase ===
  new Swiper(".mySwiperB", {
    loop: true,
    centeredSlides: true,
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: {
      delay: 5000,
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

  // === Modal for Swiper B Projects ===
  const modal = document.getElementById("projectModal");
  const modalContent = modal?.querySelector(".modal-body");
  const closeBtn = modal?.querySelector(".modal-close");

  const projectDetails = [
    {
      title: "Website One",
      desc: "An ecommerce site built with Shopify and React. It features secure checkout and a fully responsive UI.",
      images: ["images/web1.png", "images/web1b.png"]
    },
    {
      title: "Website Two",
      desc: "A portfolio site showcasing 3D animation work. Built with WebGL and Blender renders.",
      images: ["images/web2.png", "images/web2b.png"]
    },
    {
      title: "Website Three",
      desc: "An events platform for live workshops and community collaboration. Features event calendars and live chat.",
      images: ["images/web3.png", "images/web3b.png"]
    },
    {
      title: "Website Four",
      desc: "A small business website for a local bakery, with menus, online orders, and seasonal promotions.",
      images: ["images/web4.png", "images/web4b.png"]
    }
  ];

  if (modal && modalContent) {
    // Open modal on swiper-slide click
    document.querySelectorAll(".mySwiperB .swiper-slide").forEach((slide, index) => {
      slide.addEventListener("click", () => {
        const project = projectDetails[index] || {
          title: "Unknown Project",
          desc: "No details available.",
          images: []
        };

        const imageHTML = project.images.map(src => `
          <img src="${src}" alt="${project.title}" class="modal-image" style="width: 100%; margin-bottom: 10px; border-radius: 6px;" />
        `).join("");

        modalContent.innerHTML = `
          <h3 style="color: var(--orange); margin-bottom: 10px;">${project.title}</h3>
          ${imageHTML}
          <p>${project.desc}</p>
        `;
        modal.classList.add("visible");
      });
    });

    // Close modal on click outside or close button
    modal.addEventListener("click", (e) => {
      if (e.target === modal) modal.classList.remove("visible");
    });
    if (closeBtn) {
      closeBtn.addEventListener("click", () => modal.classList.remove("visible"));
    }
  }
});
