// МЕТОД 1
/*
const price = 5;
const quantity = 14;
const total = price * quantity;
*/
// МЕТОД 2
/*
let price, quantity, total;
price = 5;
quantity = 14;
total = price * quantity;
*/

// МЕТОД 3
const price = 5, quantity = 14;
const total = price * quantity;


// Записываем результат в элемент с идентификатором cost
const el = document.getElementById('cost');  // Получаем элемент с идентификатором cost
el.textContent = `${total} ₽`;              // Заменяем содержимое этого элемента

/* 
ПРИМЕЧАНИЕ: textContent не работает в браузере IE8 и версии ниже
Вы можете использовать innerHTML, но возникает угроза безопасности сайта, как описано в книге:
el.innerHTML = `${total} ₽`;
*/