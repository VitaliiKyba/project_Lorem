/******/ (() => { // webpackBootstrap
/*!*******************************!*\
  !*** ./src/scripts/scroll.js ***!
  \*******************************/
/*
1   В классе анимируемого обьекта указать:
        transform: translate(0px, 120%);// - смещаем вниз,
        opacity: 0;// - делаем прозрачным,
        transition: all 0.8s ease 0s;// - указываем время появления.
2   Создаём новую инструкцию:
    .сласс анимируемого обьекта._active {
        transform: translate(0px, 0%);// - возвращаем обьект на место,
        opacity: 1;// - делаем непрозрачным.
        }
3   В html разметке к существующим классам анимируемых обьектов добавляем
    через пробел класс _anim-items и _anim-no-hide для анимации и для отключения анимации при
    прокрутке страницы вверх.
 */

/*Находим и обьявляем в переменную все обьекты (массив обьектов),
которые будут анимироваться*/
var animItems = document.querySelectorAll("._anim-items");

if (animItems.length > 0) {
  //Добавляем событие на всё окно браузера
  var animOnScroll = function animOnScroll(params) {
    for (var i = 0; i < animItems.length; i++) {
      var animItem = animItems[i]; //Получаем в переменную animItem каждый из элементов массива

      var animItemHeight = animItem.offsetHeight; //Получаем высоту текущего обьекта

      var animItemOffset = offset(animItem).top; //Получаем значение от верха страницы до текущего обьекта

      var animStart = 5; //Коэффициент запуска анимаций

      var animItemPoint = window.innerHeight - animItemHeight / animStart; //Определяем момент запуска анимации

      if (animItemHeight > window.innerHeight) {
        //Если расстояние от верха до нашего обьекта меньше высоты экрана
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if (pageYOffset > animItemOffset - animItemPoint && pageYOffset < animItemOffset + animItemHeight) {
        animItem.classList.add("_active");
      } else {
        if (!animItem.classList.contains("_anime-no-hide")) {
          animItem.classList.remove("_active");
        }
      }
    }
  };

  var offset = function offset(el) {
    //Функция получения положения обьекта в окне браузера
    var rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return {
      top: rect.top + scrollTop,
      left: rect.left + scrollLeft
    };
  };

  //Проверяем, существование таких классов
  window.addEventListener("scroll", animOnScroll);
  setTimeout(function () {
    animOnScroll();
  }, 400);
} //export default animOnScroll();
/******/ })()
;
//# sourceMappingURL=scroll.2e58e5df615cfc18fcab.js.map