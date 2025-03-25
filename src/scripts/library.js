// фильтрация// фильтрация
function toggleMainFilter(category, element) {
  const filterButtons = document.querySelectorAll('.A_FilterBtn')
  const subFilterButtons = document.querySelectorAll('.A_SubFilterBtn')

  if (element) {
    filterButtons.forEach((btn) => btn.classList.remove('active'))
    element.classList.add('active')
  }

  // Сбрасываем активные подфильтры
  subFilterButtons.forEach((btn) => btn.classList.remove('active'))

  const wordFilters = document.getElementById('M_WordSubfilters')
  const phraseFilters = document.getElementById('M_PhraseSubfilters')

  if (wordFilters) {
    wordFilters.style.display = category === 'words' ? 'flex' : 'none'
  }

  if (phraseFilters) {
    phraseFilters.style.display = category === 'phrases' ? 'flex' : 'none'
  }

  filterCards(category)
}

function filterCards(category, element = null) {
  const cards = document.querySelectorAll('.O_Card')
  const matchWords = ['how-how', 'who-who', 'things', 'whatdoing', 'tenderness']
  const matchPhrases = ['proverbs', 'sayings', 'idioms']

  cards.forEach((card) => {
    if (
      category === 'all' ||
      card.classList.contains(category) ||
      (category === 'words' &&
        matchWords.some((c) => card.classList.contains(c))) ||
      (category === 'phrases' &&
        matchPhrases.some((c) => card.classList.contains(c)))
    ) {
      card.style.display = 'flex'
    } else {
      card.style.display = 'none'
    }
  })

  if (element) {
    document
      .querySelectorAll('.A_SubFilterBtn')
      .forEach((btn) => btn.classList.remove('active'))
    element.classList.add('active')
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const activeBtn = document.querySelector('.A_FilterBtn.active')
  toggleMainFilter('all', activeBtn || null)
})

window.toggleMainFilter = toggleMainFilter
window.filterCards = filterCards
