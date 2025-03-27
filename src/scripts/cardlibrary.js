import cardData from '../library.json'

const container = document.getElementById('dynamic-card-container')

// Генерация HTML для каждого элемента из данных в JSON
cardData.cards.forEach((item) => {
  let cardHTML = `
    <div class="${item.cardClass}" onclick="${item.onclick}" style="background-image: url('${item.backgroundImage}')">
      <div class="W_TagsBox">
        <div class="A_TagsRed">${item.tags.tagRed}</div>
        <div class="A_TagsWord">${item.tags.tagWord}</div>
      </div>
  `

  // Если изображение присутствует, добавляем тег <img>
  if (item.imageSrc) {
    cardHTML += `<img src="${item.imageSrc}" alt="" />`
  }

  // Добавляем текстовую информацию
  cardHTML += `
    <div class="W_TextWordBox">
      <h2>${item.text.title}</h2>
      <div>${item.text.description}</div>
    </div>
  </div>
  `

  // Вставляем HTML-код карточки непосредственно в контейнер
  container.innerHTML += cardHTML
})
