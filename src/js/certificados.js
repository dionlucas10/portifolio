const swiperCertificado = new Swiper('.swiperCertificados', {
  speed: 400,
  spaceBetween: 20,

  autoplay: {
   delay: 5000,
 },

  pagination: {
    el: '.swiperCertificados .swiper-pagination',
    type: 'bullets',
    clickable: true,
  },

  
  freeMode: false,
  freeModeMomentum: false,

  breakpoints: {
    320: {
      slidesPerView: 1.5,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 1.5,
      spaceBetween: 15,
    },
    844: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});