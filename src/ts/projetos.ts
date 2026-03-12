const swiperManual = new Swiper(".swiperManual", {
  effect: "coverflow",
  coverflowEffect: {
    rotate: 50,
    slideShadows: false,
  },
  speed: 1000,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: '.swiperManual .swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
});
