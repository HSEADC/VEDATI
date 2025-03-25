import './index.css'

// отправляем на 404 вместо поиска

document.querySelectorAll('.A_SearchIcon').forEach((icon) => {
  icon.addEventListener('click', function () {
    window.location.href = 'error.html'
  })
})

// меню
const burgerButton = document.querySelector('.A_BurgerButton')
const mobileMenu = document.querySelector('.M_NavMobile')
const closeButtons = document.querySelectorAll('.A_CloseIcon')
// открываем меню
if (burgerButton && mobileMenu) {
  burgerButton.addEventListener('click', () => {
    mobileMenu.style.display = 'flex'
  })
  // закрываем меню
  closeButtons.forEach((button) => {
    button.addEventListener('click', () => {
      mobileMenu.style.display = 'none'
    })
  })
  // при ширине экрана больше 950 автоматически закрывает меню
  window.addEventListener('resize', () => {
    if (window.innerWidth > 950) {
      mobileMenu.style.display = 'none'
    }
  })
}
// форма

document.addEventListener('DOMContentLoaded', () => {
  var form = document.getElementById('my-form')

  async function handleSubmit(event) {
    event.preventDefault()
    var status = document.getElementById('my-form-status')
    var data = new FormData(event.target)
    fetch(event.target.action, {
      method: form.method,
      body: data,
      headers: {
        Accept: 'application/json',
      },
    })
      .then((response) => {
        if (response.ok) {
          status.innerHTML = 'сие послание отправлено!'
          form.reset()
        } else {
          response.json().then((data) => {
            if (data.errors) {
              status.innerHTML = data.errors
                .map((error) => error.message)
                .join(', ')
            } else {
              status.innerHTML =
                'Oops! There was a problem submitting your form.'
            }
          })
        }
      })
      .catch((error) => {
        status.innerHTML = 'Oops! There was a problem submitting your form.'
      })
  }

  if (form) {
    form.addEventListener('submit', handleSubmit)
  }
})

// первый экран баннер

const slides = document.querySelectorAll('.O_Slide')
const dots = document.querySelectorAll('.A_Dot')
let current = 0

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('is-active', i === index)
    dots[i].classList.toggle('is-active', i === index)
  })
  current = index
}

dots.forEach((dot) => {
  dot.addEventListener('click', () => {
    showSlide(Number(dot.dataset.index))
  })
})

setInterval(() => {
  let next = (current + 1) % slides.length
  showSlide(next)
}, 5000)

// кнопки

document.addEventListener('DOMContentLoaded', () => {
  const toLibraryBtn = document.getElementById('A_ToLibraryButton')
  const toArticlesBtn = document.getElementById('A_ToArticlesButton')
  const toTestsBtn = document.getElementById('A_ToTestsButton')

  if (toLibraryBtn) {
    toLibraryBtn.addEventListener('click', () => {
      window.location.href = 'library.html'
    })
  }

  if (toArticlesBtn) {
    toArticlesBtn.addEventListener('click', () => {
      window.location.href = 'articles.html'
    })
  }

  if (toTestsBtn) {
    toTestsBtn.addEventListener('click', () => {
      window.location.href = 'tests.html'
    })
  }
})

// фильтрация

// function toggleMainFilter(category, element) {
//   document
//     .querySelectorAll('.A_FilterBtn')
//     .forEach((btn) => btn.classList.remove('active'))
//   element.classList.add('active')

//   document.getElementById('M_WordSubfilters').style.display =
//     category === 'words' ? 'flex' : 'none'
//   document.getElementById('M_PhraseSubfilters').style.display =
//     category === 'phrases' ? 'flex' : 'none'

//   filterCards(category)
// }

// function filterCards(category, element = null) {
//   const cards = document.querySelectorAll('.O_Card')
//   cards.forEach((card) => {
//     const matchWords = [
//       'how-how',
//       'who-who',
//       'things',
//       'whatdoing',
//       'tenderness',
//     ]
//     const matchPhrases = ['proverbs', 'sayings', 'idioms']

//     if (
//       category === 'all' ||
//       card.classList.contains(category) ||
//       (category === 'words' &&
//         matchWords.some((c) => card.classList.contains(c))) ||
//       (category === 'phrases' &&
//         matchPhrases.some((c) => card.classList.contains(c)))
//     ) {
//       card.style.display = 'block'
//     } else {
//       card.style.display = 'none'
//     }
//   })

//   if (element) {
//     document
//       .querySelectorAll('.A_SubFilterBtn')
//       .forEach((btn) => btn.classList.remove('active'))
//     element.classList.add('active')
//   }
// }

// document.addEventListener('DOMContentLoaded', () => {
//   toggleMainFilter('all', document.querySelector('.A_FilterBtn.active'))
// })
// window.toggleMainFilter = toggleMainFilter
// window.filterCards = filterCards
