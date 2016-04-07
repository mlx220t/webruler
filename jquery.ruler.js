;(function ($)
{
	$.fn.ruler = function(width) {

		if(!width) {
			width = 3000;
		}

		var ruler = this.first();

		ruler.init = function() {

			ruler.addClass('ruler');


			function devSize() {

				var wMin = "";
				var wMin1 = "<div class='min'></div>";

				for (var m = 0; m < 11; m++) {
					wMin = wMin + wMin1;
				}

				var wBlock = 100;
				var fullWidth = width;
				var wBlocks = fullWidth / wBlock;

				for (var i = 1; i < wBlocks + 1; i++) {
					$(ruler).append("<div class='wblock'>" + wMin + "<div>" + wBlock * i + "</div></div>");
				}
			};
			devSize();

			ruler.append("<div class='additional'></div>");
			ruler.find('.additional').append("<div class='cursize'></div>");

			function curSize() {
				var hw = $('html').outerWidth();
				ruler.find('.cursize').empty().text('w:' + hw);
			};
			curSize();

			// opacity slider added
			ruler.find('.additional').append("<div class='opacity-block'><div class='opacity'></div></div>");
			ruler.find(".opacity").slider({
				range: "min",
				min: 0,
				max: 100,
				slide: function( event, ui ) {
					ruler.css({'background' : '' + 'rgba(85,85,177,'+(ui.value / 100)+')' });
				}
			});

			ruler.find('.additional').append("<span class='tobutton totop'>to Top</span>");
			ruler.find('.additional').append("<span class='tobutton toleft'>to Left</span>");
			ruler.find('.totop').click(function(){
				ruler.animate({top : 0, left : 0, right: 'auto', bottom :'auto'}, 500);
			});
			ruler.find('.toleft').click(function(){
				ruler.animate({left : 0, right: 'auto'}, 500);
			});

			$(window).resize(function () {
				curSize();
			});

			$(ruler).draggable();

		};
		ruler.init();
	};
})(jQuery);










