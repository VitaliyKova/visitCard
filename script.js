document.addEventListener("DOMContentLoaded", function () {
  // Функция для проверки видимости элемента с учетом смещения
  function isElementInViewport(el, offset = 0) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top + offset <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.bottom + offset >= 0
    );
  }

  // Функция для добавления класса 'visible'
  function handleScroll() {
    const elements = document.querySelectorAll(".hidden");
    elements.forEach((el) => {
      if (isElementInViewport(el, 200)) {
        // Смещение на -200px
        el.classList.add("visible");
        el.classList.remove("hidden");
      }
    });

    // Обработка видимости стрелки
    const arrow = document.querySelector(".scroll-down-arrow");
    if (isElementInViewport(arrow, 500)) {
      arrow.classList.add("hidden-arrow");
    } else {
      arrow.classList.remove("hidden-arrow");
    }

    const fixedHeader = document.querySelector(".fixed-header");
    if (window.scrollY > window.innerHeight * 0.9) {
      fixedHeader.classList.add("visible");
    } else {
      fixedHeader.classList.remove("visible");
    }
  }

  // Добавляем обработчик события scroll
  window.addEventListener("scroll", handleScroll);

  // Запускаем обработчик при загрузке страницы
  handleScroll();
});
