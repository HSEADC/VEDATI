import './index.scss'

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
