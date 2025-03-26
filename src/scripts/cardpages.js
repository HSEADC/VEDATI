import cardData from '../data.json'

// Получаем ID из URL (например, card=1)
const urlParams = new URLSearchParams(window.location.search)
const cardId = urlParams.get('card') // Получим значение card из URL, например "1"

// Находим контейнер для вставки данных
const container = document.getElementById('dynamic-card-container')

// Проверяем, что параметр cardId существует и является числом
if (cardId && !isNaN(cardId)) {
  // Преобразуем cardId в число и ищем нужный объект в JSON
  const currentCard = cardData.find((item) => item.id === parseInt(cardId))

  if (currentCard) {
    const section = document.createElement('section')
    section.className = `O_ImageTextCard ${currentCard.cardColorClass}`

    section.innerHTML = `
      <div class="allCard ${currentCard.cardClass} W_Column" style="background-image: url('/${currentCard.background}')">
        <img src="/${currentCard.imageSrc}" alt="" />
      </div>
      <div class="text W_Column">
        <div class="W_WordCardTag">
          <h2>${currentCard.title}</h2>
          <div class="A_TagsCard">${currentCard.tag}</div>
        </div>
        <div class="M_TextBox">
          <p>${currentCard.tagTime} <span id="A_TimeIconBlack"></span></p>
          <div class="W_SmallTextBox">
            <h6>${currentCard.description}</h6>
            <div class="Q_Line"></div>
            <h6>[пример]</h6>
            <h6 class="Q_Italic">${currentCard.example}</h6>
          </div>
        </div>
      </div>
    `

    container.appendChild(section)
  } else {
    console.error('Карточка не найдена')
  }
} else {
  console.error('Неверный параметр card')
}
