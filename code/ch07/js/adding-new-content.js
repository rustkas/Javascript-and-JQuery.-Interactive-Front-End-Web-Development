$(function() {
	
	
	
	setTimeout(() => {
		$('li.hot').prepend('+ ');
	}, 3000);
	
	setTimeout(() => {
		const $newListItem = $('<li>кукуруза <em>без ГМО</em></li>');
		$('li:last').after($newListItem);
	}, 6000);
	
	setTimeout(() => {
		$('ul').before('<p class="notice">Список обновлен!</p>');
	}, 9000);
});