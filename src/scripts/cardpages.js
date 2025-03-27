import cardData from '../data.json'

const container = document.getElementById('dynamic-card-container')

// Извлекаем класс контейнера (например, 'card1', 'card2' и т.д.)
const pageClass = container.classList[0] // предполагаем, что класс контейнера - это 'card1', 'card2' и т.д.

// Фильтруем данные из JSON по классу контейнера
const filteredData = cardData[pageClass] || [] // Если данных нет, используем пустой массив

// Генерируем HTML для каждого элемента из отфильтрованных данных
filteredData.forEach((item) => {
  const section = document.createElement('section')
  section.className = `O_ImageTextCard ${item.cardColorClass}`

  section.innerHTML = `
    <div class="allCard ${item.cardClass} W_Column" style="background-image: url('${item.background}')">
      <img src="${item.imageSrc}" alt="" />
    </div>
    <div class="text W_Column">
      <div class="W_WordCardTag">
        <h2>${item.title}</h2>
        <div class="A_TagsCard">${item.tag}</div>
      </div>
      <div class="M_TextBox">
        <p>${item.tagTime} <span id="A_TimeIconBlack"></span></p>
        <div class="W_SmallTextBox">
          <h6>${item.description}</h6>
          <div class="Q_Line"></div>
          <h6>[пример]</h6>
          <h6 class="Q_Italic">${item.example}</h6>
        </div>
      </div>
    </div>
  `

  container.appendChild(section)
})
