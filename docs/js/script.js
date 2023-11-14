const overLay = document.querySelector('.overlay');
const btnOverlay = document.querySelectorAll('.button__overlay');
const btnClose = document.querySelector('.button-close');
const btnBurger = document.querySelector('.burger');
const headerContentBottom = document.querySelector('.header__content-mobile');
const headerNav = document.querySelector('.nav-list__header-mobile');

btnBurger.addEventListener('click', () => {
  headerContentBottom.classList.toggle('header__content-mobile--visible');
  headerNav.classList.toggle('nav-list__header-mobile--visible');
});

btnOverlay.forEach((btnOverlayElement) => {
  btnOverlayElement.addEventListener('click', () => {
    overLay.classList.add('overlay--visible');
  });
});

btnClose.addEventListener('click', () => {
  overLay.classList.remove('overlay--visible');
});

// slick
$(document).ready(function () {
  $('.reviews-slider').slick({
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
});

// Mask
$(document).ready(function () {
  $('.tel').mask('+7 (999) 999-99-99');
});
