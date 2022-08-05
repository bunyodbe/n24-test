// Nav
const navCloseBTn = document.querySelector(".nav__close");
const navOpenBtn = document.querySelector(".header__menu ");
const nav = document.querySelector(".nav");

function closeNav() {
  nav.classList.remove("nav--open");
}

function openNav() {
  nav.classList.add("nav--open");
}

navCloseBTn.addEventListener("click", closeNav);
navOpenBtn.addEventListener("click", openNav);
