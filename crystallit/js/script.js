$(function() {
    $('.slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1
    });
    
    $('.choise__slider').slick({
        infinite: true,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1
    });

    $('.reviews__slider').slick({
        dots: true,
        arrows: false
    });

    
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

// Flip

// const overlayCard = document.querySelector('.detail__overlay'),
//       photoBack = document.querySelectorAll('.flip-card-back');

// photoBack.forEach((item, i) => {
//     item.addEventListener('mouseover', () => {
//         overlayCard.style.display = 'block';
//     });
// });
