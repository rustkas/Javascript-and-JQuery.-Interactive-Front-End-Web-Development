// Функция, генерирущая число в диапазоне от 1 до max
function getRandom(max) {
	return Math.floor((Math.random() * max) + 1);
}

function buildMsg(){
	let operator;
	const index = getRandom(4);
	console.log('index: ', index);
	switch (index) {
		case 1:
			operator = 'addition'; // Тип вычисления
			break;
		case 2:
			operator = 'multiplication'; // Тип вычисления
			break;
		case 3:
			operator = 'subtraction'; // Тип вычисления
			break;	
		case 4:
			operator = 'division'; // Тип вычисления
			break;
	}
	console.log('operator: ', operator);
	return buildMsg1(operator);
}	


function buildMsg1(operator) {
	let msg = '';              // Сообщение
	
	let i = 3;                 // Значение счетчика устанавливаем равным 1
	const table = 3;             // Элемент таблицы	
	
	if (operator === 'addition') { // Если переменная оператора требует сложения
	  while (i < 11) {  // Пока еще значение счетчика меньше 11
		msg += `${i} + ${table} = ${(i + table)}<br />`; // Вычисление
		i++; // Прибавляем 1 к значению счетчика
	  }
	} else if (operator === 'multiplication') { // в противном случае
	  while (i < 11) { // Пока значение счетчика еще меньше 11
		msg += `${i} x ${table} = ${(i * table)}<br />`; // Вычисление
		i++; // Прибавляем 1 к значению счетчика
	  }
	} else if (operator === 'subtraction') { // в противном случае
	  while (i < 11) { // Пока значение счетчика еще меньше 11
		msg += `${i} - ${table} = ${(i - table)}<br />`; // Вычисление
		i++; // Прибавляем 1 к значению счетчика
	  }
	} else if (operator === 'division') { // в противном случае
	  while (i < 11) { // Пока значение счетчика еще меньше 11
		msg += `${i} / ${table} = ${Math.floor(i / table)}<br />`; // Вычисление
		i++; // Прибавляем 1 к значению счетчика
	  }
	}
	
	return msg;
}	

// Выводим сообщение на страницу
const el = document.getElementById('blackboard');

function action() {
	const msg = buildMsg();
	console.log('action. msg: ', msg);
	el.innerHTML = msg;	
}

action();

// Обновляем HTML
setInterval(action, 1500);