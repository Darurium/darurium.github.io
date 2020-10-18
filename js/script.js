$(document).ready(function(){

  const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    navContainer: false,
    controls: false,
    nav: false,    
    responsive: {      
      320: {
        nav: true,
      }
    }
  });

  document.querySelector('.next').addEventListener('click', function() {
      slider.goTo('next')
    });

  document.querySelector('.prev').addEventListener('click', function() {
      slider.goTo('prev') 
    });

  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
    $(this)
      .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
      .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
  });

    
	function toggleSlide(item) {
		$(item).each(function(i) {
			$(this).on('click', function(e) {
			  e.preventDefault();
			  $('.catalog-card__content').eq(i).toggleClass('catalog-card__content_active');
			  $('.catalog-card__list').eq(i).toggleClass('catalog-card__list_active');
			})
		})
	}

	toggleSlide('.catalog-card__more');
	toggleSlide('.catalog-card__back');

});

