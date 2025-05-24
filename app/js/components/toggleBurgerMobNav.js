export default function toggleBurgerMobNav() {
  const burger = document.querySelector(".header__nav-burger");
  const mobileMenu = document.querySelector(".mobile__nav");

  console.log("hello");

  burger.addEventListener("click", () => {
    mobileMenu.classList.toggle("mobile__nav--active");
  });
}