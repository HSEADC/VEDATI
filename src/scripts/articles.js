function filterArticles(category, button) {
  const filterButtons = document.querySelectorAll('.A_Filter')
  const articles = document.querySelectorAll('.O_BigArticle, .O_SmallArticle')

  const isActive = button.classList.contains('active')

  // Снимаем активность со всех фильтров
  filterButtons.forEach((btn) => btn.classList.remove('active'))

  if (isActive) {
    // Повторный клик — показываем все карточки
    articles.forEach((article) => {
      article.style.display = 'flex'
    })
    return
  }

  // Активируем текущий фильтр
  button.classList.add('active')

  // Фильтрация карточек
  articles.forEach((article) => {
    if (article.classList.contains(`filter-${category}`)) {
      article.style.display = 'flex'
    } else {
      article.style.display = 'none'
    }
  })
}

window.filterArticles = filterArticles
