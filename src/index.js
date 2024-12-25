// превью
import './index.css'
document.addEventListener('DOMContentLoaded', () => {
  const toLibraryButton = document.getElementById('toLibrary')
  if (toLibraryButton) {
    toLibraryButton.addEventListener('click', () => {
      window.location.href = 'library.html'
    })
  }

  window.toggleMenu = function () {
    const menuItems = document.querySelector('.menu-items')
    if (menuItems) {
      menuItems.classList.toggle('active')
    }
  }

  // Face popup
  const faceButton = document.getElementById('faceBotton')
  const popupFace = document.querySelector('.popupFace')
  if (faceButton && popupFace) {
    faceButton.addEventListener('click', () => {
      popupFace.classList.add('active')
      popupFace.style.display = 'flex'
    })

    popupFace.addEventListener('click', () => {
      popupFace.classList.remove('active')
      setTimeout(() => {
        popupFace.style.display = 'none'
      }, 300)
    })
  }

  // Nkei popup
  const nkeiButton = document.getElementById('nkeiBotton')
  const popupNkei = document.querySelector('.popupNkei')
  if (nkeiButton && popupNkei) {
    nkeiButton.addEventListener('click', () => {
      popupNkei.classList.add('active')
      popupNkei.style.display = 'flex'
    })

    popupNkei.addEventListener('click', () => {
      popupNkei.classList.remove('active')
      setTimeout(() => {
        popupNkei.style.display = 'none'
      }, 300)
    })
  }

  // Toxic popup
  const toxicButton = document.getElementById('toxicBotton')
  const popupToxic = document.querySelector('.popupToxic')
  if (toxicButton && popupToxic) {
    toxicButton.addEventListener('click', () => {
      popupToxic.classList.add('active')
      popupToxic.style.display = 'flex'
    })

    popupToxic.addEventListener('click', () => {
      popupToxic.classList.remove('active')
      setTimeout(() => {
        popupToxic.style.display = 'none'
      }, 300)
    })
  }
})
document.addEventListener('DOMContentLoaded', () => {
  // Находим кнопки и добавляем обработчики событий

  // Для library.html
  const toLibraryBotton = document.querySelector('#toLibrary1 #toLibraryBotton')
  if (toLibraryBotton) {
    toLibraryBotton.addEventListener('click', () => {
      window.location.href = 'library.html'
    })
  }

  // Для articles.html
  const toLibraryBottonW1 = document.querySelector(
    '#toLibrary2 #toLibraryBottonW'
  )
  if (toLibraryBottonW1) {
    toLibraryBottonW1.addEventListener('click', () => {
      window.location.href = 'articles.html'
    })
  }

  // Для tests.html
  const toLibraryBottonW2 = document.querySelector(
    '#toLibrary3 #toLibraryBottonW'
  )
  if (toLibraryBottonW2) {
    toLibraryBottonW2.addEventListener('click', () => {
      window.location.href = 'tests.html'
    })
  }
})
document.addEventListener('DOMContentLoaded', () => {
  // Находим элемент с ID toArticle
  const toArticleDiv = document.getElementById('toArticle')

  // Добавляем обработчик события "click"
  if (toArticleDiv) {
    toArticleDiv.addEventListener('click', () => {
      window.location.href = '/article/article.html' // Перенаправление на страницу
    })
  } else {
    console.error('Элемент с ID "toArticle" не найден.')
  }
})
document.addEventListener('DOMContentLoaded', () => {
  // Находим контейнер knows
  const knowsDiv = document.getElementById('knows')

  // Убедимся, что knowsDiv существует
  if (knowsDiv) {
    // Находим внутри него элемент с ID toLibrary
    const toLibraryDiv = knowsDiv.querySelector('#toLibrary')

    // Добавляем обработчик клика, если элемент найден
    if (toLibraryDiv) {
      toLibraryDiv.addEventListener('click', () => {
        window.location.href = 'tests.html' // Перенаправляем на tests.html
      })
    } else {
      console.error('Элемент с ID "toLibrary" не найден внутри "knows".')
    }
  } else {
    console.error('Элемент с ID "knows" не найден.')
  }
})

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

// в тг

document.addEventListener('DOMContentLoaded', () => {
  const tgButton = document.getElementById('tgButton')

  if (tgButton) {
    tgButton.addEventListener('click', () => {
      window.location.href = 'https://t.me/vedatislovar'
    })
  } else {
    console.error('Элемент с ID "tgButton" не найден.')
  }
})

// в вк

document.addEventListener('DOMContentLoaded', () => {
  const vkButton = document.getElementById('vkButton')

  if (vkButton) {
    vkButton.addEventListener('click', () => {
      window.location.href = 'https://vk.com/vedatislovar'
    })
  } else {
    console.error('Элемент с ID "vkButton" не найден.')
  }
})

document.addEventListener('DOMContentLoaded', () => {
  const stButton = document.getElementById('stButton')

  if (stButton) {
    stButton.addEventListener('click', () => {
      window.location.href = 'styleguide.html'
    })
  } else {
    console.error('Элемент с ID "stButton" не найден.')
  }
})
