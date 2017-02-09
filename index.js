(function($){
	'use strict';

	var loadImages;
	
	$(document).ready(function () {
		
		$('.lazy-img').on('load', function(){
			$(this).addClass('loaded');
		});

		$(document).on("scroll", function(){
			loadImages();
		});

		(loadImages = function(){
			$('.lazy-img').each(function(){
				var image = $(this);
				// var image = block.find('img');

				if(isOnScreen(image)){
					var url = image.data('url');

				console.log(url);
					if(image.attr('src') != url){
						image.attr('src',url);
					
					}
				}
			});
		})();
	});
	


	function isOnScreen(element) {
		var win = $(window);

		var screenTop = win.scrollTop();
		var screenBottom = screenTop + win.height();

		var elementTop = element.offset().top;
		var elementBottom = elementTop + element.height();

		return elementBottom > screenTop && elementTop < screenBottom;
	}

})($);