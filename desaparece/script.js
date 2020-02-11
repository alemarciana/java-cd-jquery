$(document).ready(function(){
	$(".image").click(function(){
		$(this).addClass("invisible");
//		alert("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
		Audio('scream.wav').play();
	});
	$(".reset").click(function(){
		$(".image").removeClass("invisible");
	});
});
