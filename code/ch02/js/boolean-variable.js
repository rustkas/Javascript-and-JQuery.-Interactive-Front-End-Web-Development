// Создаем переменные и присваиваем им значения
let inStock;
let shipping;
inStock = !true;
shipping = !false;

// Получаем элемент с идентификатором stock
const elStock = document.getElementById('stock');
// Присваиваем классу имя - значение переменной inStock
elStock.className = inStock;

// Получаем элемент с идентификатором shipping
const elShip = document.getElementById('shipping');
// Присваиваем классу имя - значение переменной shipping
elShip.className = shipping;