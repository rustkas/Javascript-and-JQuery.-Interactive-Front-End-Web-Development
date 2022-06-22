(function(){
	// Создание HTML-разметки для сообщения
	const msg = `<div class="header"><a id="close" href="#">закрыть X</a></div>
				 
				 <div style="text-align:center"><h2>Техническое обслуживание</h2>
				 С 12 до 13 часов на сервере производится техническое обслуживание. 
				 Во время обслуживания могут происходить незначительные сбои в работе сайта.
				 </div>`;

	const elNote = document.createElement('div');       // Создаем новый элемент
	elNote.setAttribute('id', 'note');                // Добавляем идентификатор объявления
	elNote.innerHTML = msg;                           // Добавляем сообщение
	document.body.appendChild(elNote);                // Записываем его на страницу

	function dismissNote() {                          // Объявляем функцию
	  document.body.removeChild(elNote);              // Удаляем объявление
	}

	const elClose = document.getElementById('close');   // Получаем кнопку для закрытия объявления 
	elClose.addEventListener('click', dismissNote, false);// Нажимаем эту кнопку и закрываем объявление	
}());

