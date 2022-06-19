// Создаем объект
let hotel = {
  name : 'Гостинница "Пляж"',
  rooms : 120,
  booked : 77
};

hotel.gym = true;
hotel.pool = false;
delete hotel.booked;

// Обновляем HTML
const elName = document.getElementById('hotelName'); // Получаем элемент
const elPool = document.getElementById('pool');      // Получаем элемент
const elGym = document.getElementById('gym');        // Получаем элемент


// Обновляем HTML
setTimeout(function(){
	elName.textContent = hotel.name;                   // Обновляем HTML со свойством объекта
	elPool.className = hotel.pool;                     // Обновляем HTML со свойством объекта
	elGym.className = hotel.gym;                       // Обновляем HTML со свойством объекта	
}, 2000);

/* 
ПРИМЕЧАНИЕ: textContent не работает в браузере IE8 и версии ниже
Вы можете использовать innerHTML в строке 14, но возникает угроза безопасности сайта, как описано в книге
*/