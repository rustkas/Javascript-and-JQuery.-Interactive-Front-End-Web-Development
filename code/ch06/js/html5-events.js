(function(){

	function setup() {
	  const textInput = document.getElementById('message');
	  textInput.focus();
	}

	window.addEventListener('DOMContentLoaded', setup, false);

	window.addEventListener('beforeunload', function(event) {
	  // Пример обновлен для обеспечения кросс-браузерной совместимости (по рекомендации MDN)
	  const message = 'Вы ввели данные, которые не будут сохранены';
	  (event || window.event).returnValue = message;
	  return message;
	});
	
}());
