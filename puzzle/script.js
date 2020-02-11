$(document).ready(function(){
	$.fn.extend({
		toggleImage2: function(a, b){
			return $(this).attr({"src":$(this).attr("src") == b ? a : b,"src-alt":$(this).attr("src-alt") == b ? a : b});
		}
	});
	$("img").click(function() {
		$(this).toggleImage2($(this).attr("src"),$(this).attr("src-alt"));
	});
});
