function toggleSubList() {
  const navToggles = document.querySelectorAll(".header__nav-toggle");

  navToggles.forEach((toggle) => {
    toggle.addEventListener("click", (e) => {
      e.stopPropagation(); // чтобы клик не всплывал до document
      const parentItem = toggle.closest(".header__nav-item");

      // Сначала убираем активный класс у всех
      document.querySelectorAll(".header__nav-item--active").forEach((item) => {
        if (item !== parentItem) {
          item.classList.remove("header__nav-item--active");
        }
      });

      // Переключаем текущий
      parentItem.classList.toggle("header__nav-item--active");
    });
  });

  // Клик вне пунктов меню — закрыть всё
  document.addEventListener("click", () => {
    document.querySelectorAll(".header__nav-item--active").forEach((item) => {
      item.classList.remove("header__nav-item--active");
    });
  });
}

export default toggleSubList;
