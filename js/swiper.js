const swiper = new Swiper('.swiper', {
  slidesPerView: 5,
  spaceBetween: 20,
  loop: true,

  speed: 6000,

  autoplay: {
    delay: 0,
    disableOnInteraction: false,
    pauseOnMouseEnter: false,
  },

  freeMode: false,
  freeModeMomentum: false,
  
});
