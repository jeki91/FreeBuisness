$(document).ready(function () {
	$('.nav a[href^="#"]').click(function () {
		//Сохраняем значение атрибута href в переменной:
		var offset = $('.header').innerHeight();
		var target = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(target).offset().top - offset//можно вычесть высоту меню
		}, 500);
	});
});