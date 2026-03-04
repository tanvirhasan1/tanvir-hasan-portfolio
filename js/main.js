(function ($) {
  "use strict";

  // project area slider
  var swiper = new Swiper(".project-slider", {
    slidesPerView: 3,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 2700,
      disableOnInteraction: false,
    }
  });


  // skill area slider 
  var swiper = new Swiper(".skill-slider", {
    slidesPerView: 6,
    spaceBetween: 0,
    centeredSlides: true,
    loop: true,
    speed: 4000,
    allowTouchMove: false,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  
  // Hover active
  $('.hover__active').on('mouseenter', function () {
		$(this).addClass('active').parent().siblings().find('.hover__active').removeClass('active');
	});

  // sticky header
  var windowOn = $(window);
  windowOn.on('scroll', function () {
		var scroll = $(window).scrollTop();
		if (scroll < 100) {
			$("#header-sticky").removeClass("sticky");
		} else {
			$("#header-sticky").addClass("sticky");
		}
	});

  // wow js 
  new WOW().init();

})(jQuery);
