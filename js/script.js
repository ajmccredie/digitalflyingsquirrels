document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".hero");
  const form = document.querySelector("form");

  // === Shrink Header on Scroll ===
  if (header) {
    window.addEventListener("scroll", () => {
      header.classList.toggle("shrink", window.scrollY > 50);
    });
  }

  // === Clear Form on Submit ===
  if (form) {
    form.addEventListener("submit", () => {
      form.reset();
    });
  }

  // === Swiper A ===
  new Swiper(".mySwiperA", {
    loop: true,
    centeredSlides: true,
    slidesPerView: window.innerWidth < 768 ? 1 : 3,
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

  // === Swiper B ===
  new Swiper(".mySwiperB", {
    loop: true,
    centeredSlides: true,
    slidesPerView: window.innerWidth < 768 ? 1 : 3,
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

  // === Modal Logic ===
  const modal = document.getElementById("projectModal");
  const modalContent = modal?.querySelector("#modalBody");
  const closeBtn = modal?.querySelector(".modal-close");

  const projectDetails = [
    {
      title: "Big Bunny Flying Trapeze",
      desc: "An ecommerce site taking bookings using bookwhen. Fully functioning commercially built site",
      image2Desc: "Merchandise pages included in the site.",
      images: ["images/web1.png", "images/web1b.png"],
      link: "https://www.bigbunnyflyingtrapeze.co.uk"
    },
    {
      title: "GoldCard Electrical Training",
      desc: "Commercially built site for training provider in Dorset.",
      image2Desc: "Site includes two games: pairs and a quiz.",
      images: ["images/web2.png", "images/web2b.png"],
      link: "https://www.goldcardelectricaltraining.co.uk"
    },
    {
      title: "Eternal Ink",
      desc: "Portfolio site for tattoo shop",
      image2Desc: "Site includes instructional videos for customers planning tattoos.",
      images: ["images/web3.png", "images/web3b.png"],
      link: "https://ajmccredie.github.io/eternal-ink/advice-and-terms.html"
    },
    {
      title: "Roo's Fudge Kitchen",
      desc: "Portfolio ecommerce site for ficticious fudge and merchandise brand.",
      image2Desc: "Product features available to order.",
      images: ["images/web4.png", "images/web4b.png"],
      link: "https://roos-fudge-kitchen-9f7897dcad9e.herokuapp.com"
    }
  ];

  if (modal && modalContent) {
    document.querySelectorAll(".mySwiperB .swiper-slide").forEach((slide) => {
      slide.addEventListener("click", () => {
        const index = parseInt(slide.getAttribute("data-id"));
        const project = projectDetails[index];

        if (!project) return;

        modalContent.innerHTML = `
          <h3 style="color: var(--orange); margin-bottom: 10px;">${project.title}</h3>
          <p style="margin-bottom: 16px;">${project.desc}</p>
          <img src="${project.images[0]}" alt="${project.title}" class="modal-image" style="width: 100%; border-radius: 6px; margin-bottom: 20px;" />
          <p style="margin-bottom: 10px;">${project.image2Desc}</p>
          <img src="${project.images[1]}" alt="Detail image" class="modal-image" style="width: 100%; border-radius: 6px;" />
          <div style="text-align: center; margin-top: 20px;">
            <a href="${project.link}" target="_blank" rel="noopener noreferrer" style="color: var(--orange); font-weight: 600; text-decoration: underline;">
              Visit the full site here
            </a>
          </div>
        `;

        modal.classList.add("visible");
      });
    });

    closeBtn?.addEventListener("click", () => modal.classList.remove("visible"));
    modal.addEventListener("click", (e) => {
      if (e.target === modal) modal.classList.remove("visible");
    });
  }

  document.querySelectorAll('a[href="#contact"]').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.getElementById('contact');
      if (target) {
        const yOffset = -100;
        const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    });
  });
});
