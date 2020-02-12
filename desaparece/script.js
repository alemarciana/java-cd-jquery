function random_color()
{
	var rgb = ['a','b','c','d','e','f','0','1','2','3','4','5','6','7','8','9'];
	color = '#'
	for(var i = 0; i < 6; i++)
	{
		x = Math.floor((Math.random()*16));
		color += rgb[x];
	}
	return color;
}
$(document).ready(function(){
	$(".image").click(function(){
		$(this).addClass("invisible");
//		alert("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
		Audio('scream.wav').play();
		$("#container").css("background-image","linear-gradient("+random_color()+","+random_color()+","+random_color()+","+random_color()+")");
	});
	$(".reset").click(function(){
		$(".image").removeClass("invisible");
	});
});
