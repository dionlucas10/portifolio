const swiper = new Swiper('.swiper', {
  slidesPerView: 5,
  spaceBetween: 20,
  loop: true,

  speed: 5000, // Velocidade reduzida para transições mais rápidas

  autoplay: {
    delay: 0, // Delay de 3 segundos entre slides
    disableOnInteraction: true, // Pausa o autoplay quando o usuário interage
    pauseOnMouseEnter: true, // Pausa quando o mouse entra
  },

  freeMode: false,
  freeModeMomentum: false,

  pagination: {
    el: '.swiper .swiper-pagination',
    clickable: true,
  },

  breakpoints: {
    320: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 2,
    },
    844: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
  },
});
