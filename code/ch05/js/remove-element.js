// Подготавливаем элемент к удалению из переменной.
const removeEl = document.getElementsByTagName('li')[3];

// Определяем элемент, содержащий удаляемый объект.
const containerEl = document.getElementsByTagName('ul')[0];


setTimeout(function(){
	containerEl.removeChild(removeEl);
	
	const timeIntervalId = setInterval(function(){
		if(containerEl.childElementCount > 0) {
			containerEl.removeChild(containerEl.lastChild);
			
			
			if(containerEl.childElementCount === 0) {
				// Создаем текстовый узел и сохраняем его в переменной.
				const newText = document.createTextNode('Товаров больше нет');
				// Прикрепляем новый текстовый узел к новому элементу.
				const newEl = document.createElement('li');
				newEl.appendChild(newText);
				containerEl.appendChild(newEl);	
			}
		}else {
			clearInterval(timeIntervalId);
		}
		
	}, 500);	
	
	
}, 1000);
// Удаляем элемент.
