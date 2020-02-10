$(document).ready(function(){
	$(".image").click(function(){
		$(this).addClass("invisible");
	});
	$(".reset").click(function(){
		$(".image").removeClass("invisible");
	});
});
