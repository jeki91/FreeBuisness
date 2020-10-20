$(document).ready(function () {

	$('.pricing__column').hover(function () {
		$(this).find('.pricing__item').toggleClass('hover-price');
	});

	$('.pricing__item').hover(function () {
		$(this).find('.column__price').toggleClass('hover-price');
		$(this).find('.column__info').toggleClass('hover-info');
	});
}); 