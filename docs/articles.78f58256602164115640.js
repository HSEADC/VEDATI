/******/ (() => { // webpackBootstrap
function filterArticles(category, button) {
  var filterButtons = document.querySelectorAll('.A_Filter');
  var articles = document.querySelectorAll('.O_BigArticle, .O_SmallArticle');
  var isActive = button.classList.contains('active');

  // Снимаем активность со всех фильтров
  filterButtons.forEach(function (btn) {
    return btn.classList.remove('active');
  });
  if (isActive) {
    // Повторный клик — показываем все карточки
    articles.forEach(function (article) {
      article.style.display = 'flex';
    });
    return;
  }

  // Активируем текущий фильтр
  button.classList.add('active');

  // Фильтрация карточек
  articles.forEach(function (article) {
    if (article.classList.contains("filter-".concat(category))) {
      article.style.display = 'flex';
    } else {
      article.style.display = 'none';
    }
  });
}
window.filterArticles = filterArticles;
/******/ })()
;