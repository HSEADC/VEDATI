import React from 'react'

const NavBar = () => {
  return (
    <nav className="O_NavBar">
      {/* Лого десктоп */}
      <a href="index.html" className="A_LogoDesktop white">
        <img src="./images/A_LogoDesktopWhite.svg" alt="" />
      </a>
      <a href="index.html" className="A_LogoDesktop black">
        <img src="./images/A_LogoDesktopBlack.svg" alt="" />
      </a>

      {/* Лого мобилка */}
      <a href="index.html" className="A_LogoMobile white">
        <img src="./images/A_LogoMobileWhite.svg" alt="" />
      </a>
      <a href="index.html" className="A_LogoMobile black">
        <img src="./images/A_LogoMobileBlack.svg" alt="" />
      </a>

      <div className="W_IconNavBarBox">
        {/* Лупа */}
        <img
          className="A_SearchIcon white"
          src="./images/A_SearchIconWhite.svg"
          alt=""
        />
        <img
          className="A_SearchIcon black"
          src="./images/A_SearchIconBlack.svg"
          alt=""
        />

        {/* Меню десктоп */}
        <div className="M_NavDesktop">
          <a href="library.html">БИБЛИОТЕКА</a>
          <a href="articles.html">СТАТЬИ</a>
          <a href="tests.html">ТЕСТЫ</a>
          <a href="about.html">О НАС</a>
        </div>

        {/* Бургер */}
        <button className="A_BurgerButton">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Мобильное меню */}
      <div className="M_NavMobile">
        <img
          className="A_CloseIcon black"
          src="./images/A_CloseIconBlack.svg"
          alt=""
        />
        <img
          className="A_CloseIcon white"
          src="./images/A_CloseIconWhite.svg"
          alt=""
        />

        <a href="library.html">БИБЛИОТЕКА</a>
        <a href="articles.html">СТАТЬИ</a>
        <a href="tests.html">ТЕСТЫ</a>
        <a href="about.html">О НАС</a>
      </div>
    </nav>
  )
}

export default NavBar
