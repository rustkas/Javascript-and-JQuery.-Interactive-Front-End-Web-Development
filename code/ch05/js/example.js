(function(){
	// ДОБАВЛЕНИЕ ЭЛЕМЕНТОВ К НАЧАЛУ И К КОНЦУ СПИСКА
	const list = document.getElementsByTagName('ul')[0];                 // Получаем элемент ul

	// ДОБАВЛЕНИЕ НОВОГО ЭЛЕМЕНТА К КОНЦУ СПИСКА
	const newItemLast = document.createElement('li');                    // Создаем элемент
	const newTextLast = document.createTextNode('деревенская сметана');                // Создаем текстовый узел
	newItemLast.appendChild(newTextLast);                              // Добавляем текстовый узел к элементу
	list.appendChild(newItemLast);                                     // Добавляем элемент к концу списка

	// ДОБАВЛЕНИЕ НОВОГО ЭЛЕМЕНТА К НАЧАЛУ СПИСКА
	const newItemFirst = document.createElement('li');                   // Создаем элемент
	const newTextFirst = document.createTextNode('белокочанная капуста');                // Создаем текстовый узел
	newItemFirst.appendChild(newTextFirst);                            // Добавляем текстовый узел к элементу
	list.insertBefore(newItemFirst, list.firstChild);                  // Добавляем элемент к концу списка



	const listItems = document.querySelectorAll('li');                   // Все элементы li

	// ДОБАВЛЯЕМ КЛАСС COOL КО ВСЕМ ЭЛЕМЕНТАМ СПИСКА
																 // Переменная счетчика
	for (let i = 0; i < listItems.length; i++) {                           // Перебираем элементы в цикле
	  listItems[i].className = 'cool';                                 // Изменяем класс на cool
	}

	// ДОБАВЛЯЕМ В ЗАГОЛОВОК ИНФОРМАЦИЮ О КОЛИЧЕСТВЕ ЭЛЕМЕНТОВ В СПИСКЕ
	const heading = document.querySelector('h2');                        // Элемент h2
	const headingText = heading.firstChild.nodeValue;                    // Текст элемента h2
	const totalItems = listItems.length;                                 // Количество элементов li
	const newHeading = `${headingText}<span>${totalItems}</span>`; // Контент
	heading.innerHTML = newHeading;                                    // Обновляем h2, применяя innerHTML (не textContent), так как в контенте присутствует разметка	
}());
