import React from 'react'

const Footer = () => {
  return (
    <footer className="O_Footer">
      <div className="W_LeftFooter">
        <div className="W_LogoNavBox">
          <a href="index.html" className="A_LogoFooter">
            <img src="./images/A_WhiteLogoDesktop.svg" alt="" />
          </a>
          <div className="M_NavFooter">
            <div className="M_FooterNav">
              <a href="library.html">БИБЛИОТЕКА</a>
              <a href="articles.html">СТАТЬИ</a>
              <a href="tests.html">ТЕСТЫ</a>
              <a href="about.html">О НАС</a>
            </div>
          </div>
        </div>

        <div className="M_Form">
          <h6>
            [ОСТАВЬ СВОЮ ПОЧТУ, ЧТОБЫ БЫТЬ В КУРСЕ
            <br />
            НОВИНОК И УВЕДАТЬ ПЕРВЫМ]
          </h6>
          <form
            id="my-form"
            action="https://formspree.io/f/mbljrjjb"
            method="POST"
            className="footer-form"
          >
            <div className="footer-form__group">
              <input
                type="email"
                name="email"
                placeholder="почта"
                required
                className="footer-form__input"
              />
              <button
                id="my-form-button"
                className="footer-form__button"
                type="submit"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="15"
                  viewBox="0 0 16 15"
                  fill="none"
                  className="arrow-icon"
                >
                  <path
                    className="arrow-icon"
                    d="M14.5977 1.05623L5.21064 1.05623M14.5977 1.05623L1.56014 14.0937M14.5977 1.05623L14.5977 10.4432"
                    strokeWidth="2"
                  />
                </svg>
              </button>
            </div>
            <div id="my-form-status"></div>
          </form>
        </div>
      </div>

      <div className="W_RightFooter">
        <div className="W_ListBox">
          <div className="W_CreatersList">
            <h5>Создатели</h5>
            <h6>[Березина Полина]</h6>
            <h6>[Овсянникова Нина]</h6>
            <h6>[Толкачева Лидия]</h6>
          </div>
          <div className="W_CuratorsList">
            <h5>Кураторы</h5>
            <h6>[Каем Софья]</h6>
            <h6>[Комкова Анна]</h6>
          </div>
        </div>
        <div className="W_NetworksFooterBox">
          <div className="M_TgVk">
            <a
              href="https://t.me/vedatislovar"
              target="_blank"
              className="A_IconNetworks"
              rel="noopener noreferrer"
            >
              <img src="./images/A_IconNetworksTg.svg" alt="Telegram" />
            </a>
            <a
              href="https://vk.com/vedatislovar"
              target="_blank"
              className="A_IconNetworks"
              rel="noopener noreferrer"
            >
              <img src="./images/A_IconNetworksVk.svg" alt="VK" />
            </a>
          </div>
          <a
            href="https://design.hse.ru/"
            target="_blank"
            className="A_IconNetworksHSE"
            rel="noopener noreferrer"
          >
            <img src="./images/A_IconNetworksHse.svg" alt="HSE" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
