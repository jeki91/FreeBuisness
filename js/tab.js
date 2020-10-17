$(document).ready(function() {

	$(".tab_item").not(":first").hide();
	$(".tabs .tabs__item").click(function() {
	$(".tabs .tabs__item").removeClass("active").eq($(this).index()).addClass("active");
	$(".tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");

});