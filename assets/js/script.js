var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  loop: false,
  centeredSlides: true,
  slidesPerView: 3,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 300,
    modifier: 1,
    slideShadows: false,
    initialSlide: 0,
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
      loop: true,
      slidesPerView: "auto",
      coverflowEffect: {
        stretch: 100,
        depth: 220,
      },
    },

    430: {
      loop: true,
      slidesPerView: "auto",
      coverflowEffect: {
        stretch: 150,
        depth: 220,
      },
    },

    600: {
      loop: true,
      slidesPerView: "auto",
      coverflowEffect: {
        stretch: 200,
        depth: 220,
      },
    },
    830: {
      loop: true,
      slidesPerView: "auto",
      coverflowEffect: {
        stretch: 350,
        depth: 220,
      },
    },
    1000: {
      loop: true,
      slidesPerView: "auto",
      centeredSlides: false,
      coverflowEffect: {
        stretch: 450,
        depth: 320,
      },
    },
    1001: {
      loop: true,
      slidesPerView: "auto",
      centeredSlides: false,
      coverflowEffect: {
        stretch: 650,
        depth: 320,
      },
    },
    1024: {
      slidesPerView: "auto",
      centeredSlides: false,
      coverflowEffect: {
        stretch: 740,
        depth: 200,
      },
    },
    1025: {
      slidesPerView: 2.5,
      coverflowEffect: {
        stretch: 140,
        depth: 200,
      },
    },

    1400: {
      slidesPerView: 2.5,
      coverflowEffect: {
        stretch: 150,
        depth: 200,
      },
    },
  },
});
