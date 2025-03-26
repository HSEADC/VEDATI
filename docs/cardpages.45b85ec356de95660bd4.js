/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

;// ./src/data.json
const data_namespaceObject = /*#__PURE__*/JSON.parse('[{"id":1,"cardColorClass":"violet","cardClass":"card5","imageSrc":"images/cardpages/cardi1.webp","title":"очелье","tag":"вещицы","tagTime":"[очелье]","description":"надеваемая на лоб твёрдая <br />повязка, которая удерживает <br />от попадания в глаза волос <br />челки и висков","example":"— датебайо, саске, вернись <br />в коноху, у нас лучшее очелье","background":"images/cardpages/card1.webp"},{"id":2,"cardColorClass":"blue","cardClass":"card6","imageSrc":"images/cardpages/cardi2.webp","title":"виноград","tag":"фрукты","tagTime":"[виноград]","description":"круглый плод, растущий на виноградной лозе","example":"— вкусный виноград, попробуй его!","background":"images/cardpages/card2.webp"}]');
;// ./src/scripts/cardpages.js


// Получаем ID из URL (например, card=1)
var urlParams = new URLSearchParams(window.location.search);
var cardId = urlParams.get('card'); // Получим значение card из URL, например "1"

// Находим контейнер для вставки данных
var container = document.getElementById('dynamic-card-container');

// Проверяем, что параметр cardId существует и является числом
if (cardId && !isNaN(cardId)) {
  // Преобразуем cardId в число и ищем нужный объект в JSON
  var currentCard = data_namespaceObject.find(function (item) {
    return item.id === parseInt(cardId);
  });
  if (currentCard) {
    var section = document.createElement('section');
    section.className = "O_ImageTextCard ".concat(currentCard.cardColorClass);
    section.innerHTML = "\n      <div class=\"allCard ".concat(currentCard.cardClass, " W_Column\" style=\"background-image: url('/").concat(currentCard.background, "')\">\n        <img src=\"/").concat(currentCard.imageSrc, "\" alt=\"\" />\n      </div>\n      <div class=\"text W_Column\">\n        <div class=\"W_WordCardTag\">\n          <h2>").concat(currentCard.title, "</h2>\n          <div class=\"A_TagsCard\">").concat(currentCard.tag, "</div>\n        </div>\n        <div class=\"M_TextBox\">\n          <p>").concat(currentCard.tagTime, " <span id=\"A_TimeIconBlack\"></span></p>\n          <div class=\"W_SmallTextBox\">\n            <h6>").concat(currentCard.description, "</h6>\n            <div class=\"Q_Line\"></div>\n            <h6>[\u043F\u0440\u0438\u043C\u0435\u0440]</h6>\n            <h6 class=\"Q_Italic\">").concat(currentCard.example, "</h6>\n          </div>\n        </div>\n      </div>\n    ");
    container.appendChild(section);
  } else {
    console.error('Карточка не найдена');
  }
} else {
  console.error('Неверный параметр card');
}
/******/ })()
;