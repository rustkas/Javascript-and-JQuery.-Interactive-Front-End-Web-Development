

// Функция, генерирущая число в диапазоне от 1 до 10
function getRandom() {
	return Math.floor((Math.random() * 10) + 1);
}

// Создаем константу el для записи элемента с идентификатором info
const el = document.getElementById('info');

// Фукция записывающая число в элемент
function writeRandom() {
	el.innerHTML = `<h2>случайное число от 1 до 10</h2>
					  <p>${getRandom()}</p>`;	
}

writeRandom();

setInterval(function() {
	
	writeRandom();
}, 1000);