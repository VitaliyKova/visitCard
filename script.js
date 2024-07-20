document.addEventListener('DOMContentLoaded', function () {
  // Скрытие спиннера и отображение содержимого после полной загрузки страницы
  window.addEventListener('load', function () {
    document.getElementById('spinner').style.display = 'none';
    document.getElementById('content').classList.remove('content-hidden');
  });
});
