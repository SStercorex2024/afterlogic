// import { initModalFormElements } from "components/modalElements.js";
// import { initModalFormHandler } from "components/modalFormHandler.js";

// document.addEventListener("DOMContentLoaded", () => {
//   initModalFormElements();
//   initModalFormHandler();
// });

function initModalFormHandler() {
  const form = document.querySelector(".modal_form");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (!form.checkValidity()) {
      return;
    }

    window.formDialog?.close();
    window.setModal?.showModal();
  });
}
initModalFormHandler();

function toggleBurgerMobNav() {
  const burger = document.querySelector(".header__nav-burger");
  const mobileMenu = document.querySelector(".mobile__nav");

  burger.addEventListener("click", () => {
    burger.classList.toggle("header__nav-burger--active");
    mobileMenu.classList.toggle("mobile__nav--active");
    console.log("toggle!");
  });
}
toggleBurgerMobNav();

function navItemActive() {
  const navItem = document.querySelectorAll(".mobile__nav-item");

  navItem.forEach((item) => {
    const toggle = item.querySelector(".mobile__nav-toggle");

    toggle.addEventListener("click", () => {
      item.classList.toggle("mobile__nav-item--active");
    });
  });
}
navItemActive();
