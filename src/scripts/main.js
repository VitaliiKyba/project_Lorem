import "/src/styles/style.sass";
import Polygon from "/src/img/Polygon.png";
import Rectangle36 from "/src/img/Rectangle36.png";
import Rectangle46 from "/src/img/Rectangle46.png";
import Swiper from "swiper/bundle";
import "swiper/swiper-bundle.css";
import { swiper } from "/src/scripts/swiper.js";
//import "/src/scripts/scroll.js";

/*
1   В классе анимируемого обьекта указать:
        transform: translate(0px, 120%);// - смещаем вниз,
        opacity: 0;// - делаем прозрачным,
        transition: all 0.8s ease 0s;// - указываем время появления.
2   Создаём новую инструкцию:
    .kласс анимируемого обьекта._active {
        transform: translate(0px, 0%);// - возвращаем обьект на место,
        opacity: 1;// - делаем непрозрачным.
        }
3   В html разметке к существующим классам анимируемых обьектов добавляем
    через пробел класс _anim-items и _anim-no-hide для анимации и для отключения анимации при
    прокрутке страницы вверх.
 */

/*Находим и обьявляем в переменную все обьекты (массив обьектов),
которые будут анимироваться*/
let animItems = document.querySelectorAll("._anim-items");

if (animItems.length > 0) {
  //Проверяем, существование таких классов
  window.addEventListener("scroll", animOnScroll); //Добавляем событие на всё окно браузера
  function animOnScroll(params) {
    for (let i = 0; i < animItems.length; i++) {
      const animItem = animItems[i]; //Получаем в переменную animItem каждый из элементов массива
      const animItemHeight = animItem.offsetHeight; //Получаем высоту текущего обьекта
      const animItemOffset = offset(animItem).top; //Получаем значение от верха страницы до текущего обьекта
      const animStart = 5; //Коэффициент запуска анимаций

      let animItemPoint = window.innerHeight - animItemHeight / animStart; //Определяем момент запуска анимации
      if (animItemHeight > window.innerHeight) {
        //Если расстояние от верха до нашего обьекта меньше высоты экрана
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }
      if (
        pageYOffset > animItemOffset - animItemPoint &&
        pageYOffset < animItemOffset + animItemHeight
      ) {
        animItem.classList.add("_active");
      } else {
        if (!animItem.classList.contains("_anime-no-hide")) {
          animItem.classList.remove("_active");
        }
      }
    }
  }
  function offset(el) {
    //Функция получения положения обьекта в окне браузера
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  }

  setTimeout(() => {
    animOnScroll();
  }, 400);
}

const test = () => console.log("main.js");
console.log("test");

test();
const app = Vue.createApp({
  data() {
    return {
      product: "Boots",
    };
  },
});
const mountedApp = app.mount("#app");
