$(document).ready(function () {
	$('.slider').slick({
		arrows: true,
		dots: true,
		adaptiveHeight: true,
		responsive: [
			{
				breakpoint: 1000,
				settings: {
					arrows: false,
				}
			}
		]
	});
}); 