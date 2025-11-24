const burgerBtn = document.querySelector(".header__burger");
const closeBtn = document.querySelector(".close__btn");
const asideMenu = document.querySelector(".sidebar-nav");
const links = document.querySelectorAll(".sidebar-nav__link");

burgerBtn.addEventListener("click", function () {
  asideMenu.classList.add("open");
  document.body.classList.toggle("no-scroll");
});
closeBtn.addEventListener("click", function () {
  asideMenu.classList.toggle("open");
});
links.forEach((link) => {
  link.addEventListener("click", () => {
    asideMenu.classList.remove("open");
    document.body.classList.remove("no-scroll");
  });
});
