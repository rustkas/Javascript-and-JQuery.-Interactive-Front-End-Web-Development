// Создаем переменные для приветственного сообщения
const greeting = 'Привет';
const name = 'Катерина';
const message = 'Пожалуйста, проверьте заказ';
// Конкатенируем значения трех переменных для формирования приветственного сообщения
const welcome = `${greeting}, ${name}! ${message}:`;

// Создаем переменные, в которых будет храниться подробная информация о табличке
const sign = 'Всемирная сеть';
const tiles = sign.length;
const subTotal = tiles * 5;
const shipping = 7;
const grandTotal = subTotal + shipping;

// Получаем элемент с идентификатором greeting
const el = document.getElementById('greeting');
// Заменяем содержимое элемента на персонализированное приветственное сообщение
el.textContent = welcome;

// Получаем элемент с идентификатором userSign и обновляем его содержимое
const elSign = document.getElementById('userSign');
elSign.textContent = sign;

// Получаем элемент с идентификатором tiles и обновляем его содержимое
const elTiles = document.getElementById('tiles');
elTiles.textContent = tiles;

// Получаем элемент с идентификатором subTotal и обновляем его содержимое
const elSubTotal = document.getElementById('subTotal');
elSubTotal.textContent = `${subTotal} ₽`;

// Получаем элемент с идентификатором shipping и обновляем его содержимое
const elShipping = document.getElementById('shipping');
elShipping.textContent = `${shipping} ₽`;

// Получаем элемент с идентификатором grandTotal и обновляем его содержимое
const elGrandTotal = document.getElementById('grandTotal');
elGrandTotal.textContent = `${grandTotal} ₽`;

/* 
ПРИМЕЧАНИЕ: textContent не работает в браузере IE8 и версии ниже
Вы можете использовать innerHTML, но возникает угроза безопасности сайта, как описано в книге:
*/