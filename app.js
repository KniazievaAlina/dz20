/**
 * Функція яка відкриває підменю по кліку на стрілку біля основного
 * пункту меню
 */
document.getElementById("openSubMenu").addEventListener("click", function (e) {
  const data = this.getAttribute("data-attr");
  const subMenuArray = document.getElementsByClassName("dropdown-menu");

  Array.from(subMenuArray).forEach((element) => {
    const checkData = element.getAttribute("data-attr");
    if (data === checkData) {
      if (element.classList.contains("show")) {
        this.setAttribute("src", "images/arrow-down.svg");
      } else {
        this.setAttribute("src", "images/arrow-up.svg");
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
document
  .getElementById("openMobileMenu")
  .addEventListener("click", function () {
    const menu = document.getElementById("headerNavMenu");
    if (menu.classList.contains("show")) {
      this.setAttribute("src", "images/menu.svg");
    } else {
      this.setAttribute("src", "images/close.svg");
    }
    menu.classList.toggle("show");
    document.getElementById("header").classList.toggle("open");
  });

//розгортаємо мобіле меню третьої ліні, не можу прописати його згортання
document
  .getElementById("openThirtHeaderMenu")
  .addEventListener("click", function () {
    document.getElementById("menuHidden1").classList.add("show");
    document.getElementById("menuHidden2").classList.add("show");
    document.getElementById("menuHidden3").classList.add("show");
    document.getElementById("menuHidden4").classList.add("show");
    if (document.getElementById("menuHidden1").classList.contains("show")) {
      document.getElementById("arrowDown").classList.add("block");
      document.getElementById("arrowUp").classList.add("show");
    }
  });

// Відкриваємо модальне вікно Backet

document.getElementById("icon-backet").addEventListener("click", () => {
  document.getElementById("modalBacket").classList.add("show");
  document.querySelector("body").classList.add("add-modal");
  document.getElementById("headerSecondLine").classList.add("open");

});

// Закриваємо модальне  вікно Backet при кліку на іконку закриття

document.getElementById("modalClose").addEventListener("click", () => {
  document.getElementById("modalBacket").classList.remove("show");
  document.querySelector("body").classList.remove("add-modal");
});

// Закриваємо модальне вікно Backet при кліку на поле за межами корзини
document.getElementById("modalBacket").addEventListener("click", () => {
  document.getElementById("modalBacket").classList.remove("show");
  document.querySelector("body").classList.remove("add-modal");
});

document.getElementById("modalInner").addEventListener("click", (e) => {
  e.stopPropagation();
});
