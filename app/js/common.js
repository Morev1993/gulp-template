$(document).ready(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	(function() {
        var controls = false;
        if ( $('.owl-carousel.header-slider').length === 0 ) return;
        if ( $('.owl-carousel.header-slider').find(".item").length > 1 ) {
            controls = true;
        }
		$('.owl-carousel.header-slider').owlCarousel({
		    loop: controls,
		    margin: 0,
		    nav: controls,
		    items: 1,
		    navText: ["", ""],
            mouseDrag: controls
		});
	})();


	
});