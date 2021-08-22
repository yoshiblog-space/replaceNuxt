<template>
    <header class="header" id="header">
    <div class="header__nav-menu">

      <div class="header__menu">
        <a class="header__menu__company" href="/#">
          <h1 class="header__menu__company__name">Mobility System</h1>
        </a>
        <div class="header__menu__nav-btn" id="nav-btn">
          <button class="menu__btn">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

      </div>
      <nav class="header__menu__nav__open">
        <div class="header__menu__nav__open__menu__list">
          <ul class="header__menu__nav__open__menu__list_content">
            <li class="header__menu__nav__open__menu__box">
              <a class="header__menu__nav__open__menu__link" href="#">
                <div class="header__menu__nav__open__menu">ABOUT</div>
              </a>
            </li>
            <li class="header__menu__nav__open__menu__box">
              <a class="header__menu__nav__open__menu__link" href="#">
                <div class="header__menu__nav__open__menu">SERVICE</div>
              </a>
            </li>
            <li class="header__menu__nav__open__menu__box">
              <a class="header__menu__nav__open__menu__link" href="#">
                <div class="header__menu__nav__open__menu">MEMBER</div>
              </a>
            </li>
            <li class="header__menu__nav__open__menu__box">
              <a class="header__menu__nav__open__menu__link" href="#">
                <div class="header__menu__nav__open__menu">COMPANY</div>
              </a>
            </li>
            <li class="header__menu__nav__open__menu__box">
              <a class="header__menu__nav__open__menu__link" href="#">
                <div class="header__menu__nav__open__menu">CONTACT</div>
              </a>
            </li>
          </ul>
        </div>

        <div class="header__menu__nav__open__sns-list">
          <a class="header__menu__nav__open__sns-icon" href="#">
            <i class="fab fa-facebook fa-2x header__menu__nav__open__sns-fb"></i>
          </a>
          <a class="header__menu__nav__open__sns-icon" href="#">
            <img class="header__menu__nav__open__sns-img" src="~/assets/images/twitter.png" alt="twitter">
          </a>
        </div>
      </nav>
    </div>
    <h1 class="header__text">
      <span>テキストが入ります</span>
      <span>テキストが入ります</span>
    </h1>
    <div class="header__scroll-btn">
      <a href="#" class="scroll-button">
        <span>Scroll</span>
        <span></span>
      </a>
    </div>
    <div class="header__back">
      <img src="~/assets/images/mask-base.png" alt="bakground-line" class="header__back__line-img">
      <img src="~/assets/images/mask_376up.png" alt="bakground-line" class="header__back__line-img-376up">
      <img src="~/assets/images/mask_769up.png" alt="bakground-line" class="header__back__line-img-769up">
      <img src="~/assets/images/Down.png" alt="bakground-line" class="header__back__logo-img">
    </div>
  </header>
</template>
