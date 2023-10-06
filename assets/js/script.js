var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  slidesPerView: 3,
  coverflowEffect: {
    rotate: 0,
    slideShadows: false,
    stretch: 0,
    depth: 380,
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
      centeredSlides: false,
      slidesPerView: "auto",
      coverflowEffect: {
        stretch: 200,
        depth: 320,
      },
    },

    500: {
      slidesPerView: "auto",
      coverflowEffect: {
        stretch: 300,
        depth: 400,
      },
    },

    570: {
      slidesPerView: "auto",
      coverflowEffect: {
        stretch: 350,
      },
    },
    620: {
      slidesPerView: "auto",
      coverflowEffect: {
        stretch: 400,
      },
    },
    670: {
      slidesPerView: "auto",
      coverflowEffect: {
        stretch: 450,
      },
    },

    715: {
      slidesPerView: "auto",
      coverflowEffect: {
        stretch: 500,
      },
    },
    760: {
      slidesPerView: "auto",
      coverflowEffect: {
        stretch: 520,
      },
    },
    838: {
      slidesPerView: "auto",
      coverflowEffect: {
        stretch: 550,
      },
    },
    886: {
      slidesPerView: "auto",
      coverflowEffect: {
        stretch: 600,
      },
    },

    928: {
      slidesPerView: "auto",
      coverflowEffect: {
        stretch: 650,
      },
    },

    928: {
      slidesPerView: "auto",
      coverflowEffect: {
        stretch: 700,
      },
    },
    1024: {
      slidesPerView: 3,
      coverflowEffect: {
        stretch: 0,
        depth: 380,
      },
    },

    1250: {
      coverflowEffect: {
        stretch: 100,
        depth: 250,
      },
    },

    1920: {
      coverflowEffect: {
        stretch: 0,
        depth: 380,
      },
    },
  },
});
