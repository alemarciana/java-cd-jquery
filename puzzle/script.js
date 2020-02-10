$(document).ready(function(){
	$.fn.extend({
		toggleImage: function(a, b){
			return $("img").attr($("img").attr("src") == b ? a : b);
		}
	});
	$("img").click(function(){
		$(this).toggleImage("img/cat0.png", "img/ninja0.png");
	});
});
