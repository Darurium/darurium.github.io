$(function() {
    $('.slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [{
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            
        ]

    });
    
    // $('.choise__slider').slick({
    //     infinite: true,
    //     arrows: true,
    //     slidesToShow: 3,
    //     slidesToScroll: 1
    // });

    // $('.reviews__slider').slick({
    //     dots: true,
    //     arrows: false
    // });

    
});


// Modal

const modal = document.querySelector('.modal'),
      overlay = document.querySelector('.overlay'),
      closeBtn = document.querySelector('.modal__close'),
      modalBtn = document.querySelector('.header__btn');

modalBtn.addEventListener('click', () => {
    overlay.classList.add('overlay__active');
});

closeBtn.addEventListener('click', () => {
    overlay.classList.remove('overlay__active');
});

// Hamburger - menu

const humburger = document.querySelector('.hamburger'),
      closeBtnMenu = document.querySelector('.menu__close'),
      menu = document.querySelector('.menu'),
      links = document.querySelectorAll('.menu__link');

humburger.addEventListener('click', () => {
    menu.classList.add('menu__active');
});

closeBtnMenu.addEventListener('click', () => {
    menu.classList.remove('menu__active');
});

links.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('menu__active');
    });
});
