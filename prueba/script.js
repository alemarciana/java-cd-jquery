$(document).ready(function(){
	$.fn.extend({
    		toggleText: function(a, b){
		        return this.text(this.text() == b ? a : b);
	    	}
	});
	$("#hola").click(function(){
		$("#hola").toggleClass("large");
		$("#hola").toggleClass("small");
		alert("Has cambiado el tamaño del texto");
	});
	$("#test_slide").click(function(){
		$("#bar").slideToggle();
	});

	$("#test_toggleText").click(function(){
		$(this).toggleText('uwu','owo');
	});
	$("#test_toggle").mouseenter(function(){
		$(this).hide();
	});
	$("#test_toggle").mouseleave(function(){
		$(this).show();
	});
	$(".test_append").click(function(){
		$(this).append(" uwu");
	});
	$(".add").click(function(){
		$(this).before('<p class="test_append">uwu</p>');
	});
	$(".remove").click(function(){
		$(".test_append:last").remove();
	});
});
