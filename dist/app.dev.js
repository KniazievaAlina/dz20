"use strict";

/**
 * Функція яка відкриває підменю по кліку на стрілку біля основного
 * пункту меню
 */
document.getElementById("openSubMenu").addEventListener("click", function (e) {
  var _this = this;

  var data = this.getAttribute("data-attr");
  var subMenuArray = document.getElementsByClassName("dropdown-menu");
  Array.from(subMenuArray).forEach(function (element) {
    var checkData = element.getAttribute("data-attr");

    if (data === checkData) {
      if (element.classList.contains("show")) {
        _this.setAttribute("src", "images/arrow-down.svg");
      } else {
        _this.setAttribute("src", "images/arrow-up.svg");
      }

      element.classList.toggle("show");
    } else {
      element.classList.add("hidden");
    }
  });
});
/**
 * Відкриваємо/закриваємо мобільне меню
 */

document.getElementById("openMobileMenu").addEventListener("click", function () {
  var menu = document.getElementById("headerNavMenu");

  if (menu.classList.contains("show")) {
    this.setAttribute("src", "images/menu.svg");
  } else {
    this.setAttribute("src", "images/close.svg");
  }

  menu.classList.toggle("show");
  document.getElementById("header").classList.toggle("open");
});