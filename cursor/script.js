$(document).ready(function(){
	$.fn.extend({
		toggleImage: function(a, b){
			return $(this).attr({"src":$(this).attr("src") == b ? a : b,"src-alt":$(this).attr("src-alt") == b ? a : b});
		}
	});
	$("img").hover(function(){
		$(this).toggleImage($(this).attr("src"),$(this).attr("src-alt"));
	},function(){
		$(this).toggleImage($(this).attr("src"),$(this).attr("src-alt"));
	});
});
