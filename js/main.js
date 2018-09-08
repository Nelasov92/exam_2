'use strict';


(function($){
	$(document).ready(function() {
		//tabs

		    $( "#tabs" ).tabs();

		// masonry

		$('.portfolio__foto').masonry({
		  // options
		  itemSelector: '.portfolio__foto-item',
		  columnWidth: 10
		});

		//slider
		$('.team__slider').slick({
			dots: true,
			infinite: true,
			speed: 300,
			arrows: false,
			аccessibility: false
		});
	});
})(jQuery);
