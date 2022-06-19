// Создаем объект
const hotel = {
  name : 'Тула',
  rooms : 40,
  booked : 25,
  gym: true,
  roomTypes: ['twin', 'double', 'suite'],
  checkAvailability : function() {
    return this.rooms - this.booked; // Указываем слово "this", так как внутри функции
	}
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
Вы можете использовать innerHTML в строках 13 и 16, но возникает угроза безопасности сайта, как описано в книге
*/