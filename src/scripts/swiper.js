import Swiper from "swiper/bundle";
import "swiper/swiper-bundle.css";

const swiper = new Swiper(".image-slider", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },

  // Управление колесом мыши
  mousewheel: {
    // Чувствительность колеса мыши
    sensitivity: 1,
    // Класс объекта на котором
    // будет срабатывать прокрутка мышью.
    //eventsTarget: ".image-slider"
  },

  // Скорость
  speed: 900,

  //Количество слайдов в окне
  slidesPerView: 3,

  //Расстояние между слайдами
  spaceBetween: 25,

  // Количество пролистываемых слайдов
  slidesPerGroup: 1,

  // Активный слайд по центру
  centeredSlides: true,
});

export { swiper };
