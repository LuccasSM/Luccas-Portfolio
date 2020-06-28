/*-- INICIO --*/

'use strict';

$(window).on('load', function() {

	/*--PRE LOADER--*/

	$(".loader").fadeOut(); 
	$("#preloder").delay(400).fadeOut("slow");

});

(function($) {

	/*-- NAVEGACAO --*/

	$('.nav-switch').on('click', function(event) {
		$('.main-menu').slideToggle(400);
		event.preventDefault();
	});


	/*-- PORTFOLIO --*/
	
	if($('.portfolio-warp').length > 0 ) {
		var containerEl = document.querySelector('.portfolio-warp');
		var mixer = mixitup(containerEl);
	}


	/*-- BACKGROUND SET'S --*/

	$('.set-bg').each(function() {
		var bg = $(this).data('setbg');
		$(this).css('background-image', 'url(' + bg + ')');
	});



	/*-- HERO SLIDES --*/

	var w_height = $(window).innerHeight();
	$('.hs-item').height(w_height);
	
	$('.hero-slider').owlCarousel({
		loop: true,
		nav: true,
		dots: true,
		mouseDrag: false,
		animateOut: 'fadeOut',
    	animateIn: 'fadeIn',
		navText: [' ', '<i class="fa fa-angle-right"></i><i class="fa fa-angle-right"></i><i class="fa fa-angle-right"></i>'],
		items: 1,
		autoplay: true
	});
	var dot = $('.hero-slider .owl-dot');
	dot.each(function() {
		var index = $(this).index() + 1;
		if(index < 10){
			$(this).html('0').append(index);
			$(this).append('<span>.</span>');
		}else{
			$(this).html(index);
			$(this).append('<span>.</span>');
		}
	});


	/*-- REVER SLIDES --*/

	$('.review-slider').owlCarousel({
		margin: 10,
		loop: true,
		nav: false,
		dots: false,
		items: 1,
		autoplay: true,
	});


	/*-- TODOS SLIDES---*/

	$('.work-slider').owlCarousel({
		margin: 0,
		loop: true,
		nav: true,
		dots: false,
		items: 1,
		autoplay: true,
		animateOut: 'fadeOut',
    	animateIn: 'fadeIn',
	});


	/*-- PROGRESSO CIRCULAR --*/

	$('.circle-progress').each(function() {
		var cpvalue = $(this).data("cpvalue");
		var cpcolor = $(this).data("cpcolor");
		var cptitle = $(this).data("cptitle");
		var cpid 	= $(this).data("cpid");

		$(this).append('<div class="'+ cpid +'"></div><div class="progress-info"><h2>'+ cpvalue +'%</h2><p>'+ cptitle +'</p></div>');

		if (cpvalue < 100) {

			$('.' + cpid).circleProgress({
				value: '0.' + cpvalue,
				size: 240,
				thickness: 3,
				fill: cpcolor,
				emptyFill: "rgba(0, 0, 0, 0)"
			});
		} else {
			$('.' + cpid).circleProgress({
				value: 1,
				size: 240,
				thickness: 3,
				fill: cpcolor,
				emptyFill: "rgba(0, 0, 0, 0)"
			});
		}

	});


	/*-- ACORDEON --*/

	$('.panel-link').on('click', function (e) {
		$('.panel-link').parent('.panel-header').removeClass('active');
		var $this = $(this).parent('.panel-header');
		if (!$this.hasClass('active')) {
			$this.addClass('active');
		}
		e.preventDefault();
	});



})(jQuery);

/*-- FINAL --*/