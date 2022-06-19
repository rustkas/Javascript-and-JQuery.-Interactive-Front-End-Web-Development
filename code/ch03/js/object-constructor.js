// Создаем объект
const hotel = new Object();

hotel.name = 'Гостинница "Калининград"';
hotel.rooms = 120;
hotel.booked = 77;
hotel.checkAvailability = function() {
  return this.rooms - this.booked;  
};

const elName = document.getElementById('hotelName'); // Получаем элемент
const elRooms = document.getElementById('rooms');    // Получаем элемент

// Обновляем HTML
setTimeout(function(){
	elName.textContent = hotel.name;                   // Обновляем HTML со свойством объекта
	elRooms.textContent = hotel.checkAvailability();   // Обновляем HTML со свойством объекта	
}, 2000);

/* 
ПРИМЕЧАНИЕ: textContent не работает в браузере IE8 и версии ниже
Вы можете использовать innerHTML в строках 12 и 15, но возникает угроза безопасности сайта, как описано в книге
*/