// Создаем константу subtotal для подсчета стоимости таблички и выполняем вычисление
const subtotal = (13 + 1) * 5; // Переменная subtotal равна 70

// Создаем константу shipping для подсчета стоимости доставки и выполняем вычисление
const shipping = 0.5 * (13 + 1); // Переменная shipping равна 7

// Создаем константу total со значением, равным сумме значений переменных subtotal и shipping
const total = subtotal + shipping; // Переменная total равна 77

// Выводим результат на экран
const elSub = document.getElementById('subtotal');
elSub.textContent = subtotal;

const elShip = document.getElementById('shipping');
elShip.textContent = shipping;

const elTotal = document.getElementById('total');
elTotal.textContent = total;

/* 
ПРИМЕЧАНИЕ: textContent не работает в браузере IE8 и версии ниже
Вы можете использовать innerHTML в строках 12, 15 и 18, но возникает угроза безопасности сайта, как описано в книге:

elSub.innerHTML = subtotal;
elShip.innerHTML = shipping;
elTotal.innerHTML = total;
*/