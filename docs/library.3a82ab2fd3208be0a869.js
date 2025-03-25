/******/ (() => { // webpackBootstrap
// фильтрация// фильтрация
function toggleMainFilter(category, element) {
  var filterButtons = document.querySelectorAll('.A_FilterBtn');
  var subFilterButtons = document.querySelectorAll('.A_SubFilterBtn');
  if (element) {
    filterButtons.forEach(function (btn) {
      return btn.classList.remove('active');
    });
    element.classList.add('active');
  }

  // Сбрасываем активные подфильтры
  subFilterButtons.forEach(function (btn) {
    return btn.classList.remove('active');
  });
  var wordFilters = document.getElementById('M_WordSubfilters');
  var phraseFilters = document.getElementById('M_PhraseSubfilters');
  if (wordFilters) {
    wordFilters.style.display = category === 'words' ? 'flex' : 'none';
  }
  if (phraseFilters) {
    phraseFilters.style.display = category === 'phrases' ? 'flex' : 'none';
  }
  filterCards(category);
}
function filterCards(category) {
  var element = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var cards = document.querySelectorAll('.O_Card');
  var matchWords = ['how-how', 'who-who', 'things', 'whatdoing', 'tenderness'];
  var matchPhrases = ['proverbs', 'sayings', 'idioms'];
  cards.forEach(function (card) {
    if (category === 'all' || card.classList.contains(category) || category === 'words' && matchWords.some(function (c) {
      return card.classList.contains(c);
    }) || category === 'phrases' && matchPhrases.some(function (c) {
      return card.classList.contains(c);
    })) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });
  if (element) {
    document.querySelectorAll('.A_SubFilterBtn').forEach(function (btn) {
      return btn.classList.remove('active');
    });
    element.classList.add('active');
  }
}
document.addEventListener('DOMContentLoaded', function () {
  var activeBtn = document.querySelector('.A_FilterBtn.active');
  toggleMainFilter('all', activeBtn || null);
});
window.toggleMainFilter = toggleMainFilter;
window.filterCards = filterCards;
/******/ })()
;