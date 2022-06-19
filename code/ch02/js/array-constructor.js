let index =0;

// Создаем константу.
// Сообщаем интерпретатору о создании массива.
// Указываем значения массива внутри скобок.
const colors = new Array('белый', 
                       'черный',
                       'пользовательский');
const color_values = new Array('white', 'black', '#f5f5dc');

// Выводим первый элемент массива.
const el = document.getElementById('colors');
el.textContent = colors[index];

const content = document.getElementById('content');
content.style.backgroundColor = color_values[index];

/* 
ПРИМЕЧАНИЕ: textContent не работает в браузере IE8 и версии ниже
Вы можете использовать innerHTML в строке 10, но возникает угроза безопасности сайта, как описано в книге:

el.innerHTML = colors[0];
*/

setInterval(function() {
	if(index === colors.length) {
		index = 0;
	}
	el.textContent = colors[index];
	content.style.backgroundColor = color_values[index];
	index++;
}, 3000);