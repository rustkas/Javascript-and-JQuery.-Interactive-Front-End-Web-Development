$(function() {

  // Получаем фоновый цвет первого элемента списка.
  const backgroundColor = $('li').css('background-color');

  
setTimeout(() => {
	
	  // Изменяем некоторые свойства всех элементов списка.
	  $('li').css({
		'background-color': '#c5a996',
		'border': '1px solid #fff',
		'color': '#000',
		'text-shadow': 'none',
		'font-family': 'Georgia',
		'padding-left': '+=75'
	  });	
	// Записываем, какой фоновый цвет должен использоваться после списка.
  $('ul').append(`<p style="background-color:${backgroundColor}">Предыдущий цвет: ${backgroundColor}</p>`);
},3000);

});