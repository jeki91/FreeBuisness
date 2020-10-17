$(document).ready(function() {
	let filter = $("[data-filter]"); //отслеживаем клик по переменной
	filter.on("click", function(event) {

		event.preventDefault(); //убираем стандартное поведение ссылки
		
		let cat = $(this).data('filter'); // получаем data аорибут элемента на который кликнули
		
		$('.tab-nav__item').removeClass('active'); //удаляем active где он был ранее
		$(this).addClass('active'); // при клике на ссылку добавляем класс active

		
		

		if(cat == 'All') {
			$("[data-cat]").removeClass('hide');
			

		} else {
			$("[data-cat]").each(function() {

			let workCat = $(this).data('cat');
			if(workCat != cat) {
				$(this).addClass('hide');
			} else {
				$(this).removeClass('hide');
			}
		});

		}

		/*$("[data-col]").each(function() {
			let col = $(this).data('col');
			console.log(col);
			});*/
	});



}); 