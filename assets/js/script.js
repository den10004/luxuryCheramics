var swiper = new Swiper(".swiper-container", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  initialSlide: 0,
  loop: true,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 50,
    modifier: 10,
    initialSlide: 0,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-nextt",
    prevEl: ".swiper-button-prevv",
  },
  breakpoints: {
    320: {
      coverflowEffect: {
        stretch: 7,
        depth: 40,
      },
    },
    425: {
      coverflowEffect: {
        stretch: 7,
        depth: 40,
      },
    },
    1150: {
      coverflowEffect: {
        stretch: 7,
        depth: 40,
      },
    },
  },
});
