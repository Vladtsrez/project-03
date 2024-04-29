import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

document.body.style.overflowX = 'hidden';

new Swiper('.projects-swiper-container', {
  watchOverflow: true,
  direction: 'horizontal',
  slidesPerView: 1,
  spaceBetween: 50,

  navigation: {
    nextEl: '.projects-swiper-button-next-custom',
    prevEl: '.projects-swiper-button-prev-custom',
  },

  keyboard: {
    enabled: true,
  },
});
