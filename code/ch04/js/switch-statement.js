

// Функция, генерирущая число в диапазоне от 1 до max
function getRandom(max) {
	return Math.floor((Math.random() * max) + 1);
}

// level - уровень
function buildMsg(level) {
	let msg;          // Сообщение

	// Определяем сообщение в зависимости от уровня
	switch (level) {
	case 1:
		msg = 'Удачи на первом этапе!';
		break;

	case 2:
		msg = 'Второй из трех - продолжаем!';
		break;

	case 3:
		msg = 'Финальный этап, соберитесь!';
		break;

	default:
		msg = 'Удачи!';
		break;
	}
	return msg;
}

const el = document.getElementById('answer');


function action(max) {
	const level = getRandom(max);
	const msg = buildMsg(level);
	el.textContent = msg;                   // Обновляем HTML со свойством объекта
}

action(0);

// Обновляем HTML
setInterval(function(){
	const max = 4;
	action(max);
	
}, 1500);