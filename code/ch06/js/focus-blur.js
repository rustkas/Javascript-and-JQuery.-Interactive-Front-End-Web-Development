const el = document.getElementById('username');     // Получаем введенное имя пользователя
const elMsg = document.getElementById('feedback');  // Элемент, в котором будет содержаться сообщение

function checkUsername() {                        // Объявляем функцию
  console.log('checkUsername');
  const username = el.value;     
  // Сохраняем имя пользователя в переменной
  console.log('username.length',username.length);
  if (username.length < 5) {                      // Если в имени пользователя меньше 5 символов
    elMsg.className = 'warning';                  // Изменяем атрибут class у этого сообщения
    elMsg.textContent = 'Имя слишком короткое...';// Стираем сообщение
  } else {                                        // Иначе
    elMsg.textContent = '';                       // Обновляем сообщение
  }
}

function tipUsername() {    	                   // Объявляем функцию
	console.log('tipUsername');
	const username = el.value;
	console.log('username.length',username.length);
  if (username.length < 5) {
	elMsg.className = 'tip';                        // Меняем у сообщения атрибут class
	elMsg.innerHTML = 'Имя пользователя должно содержать не менее 5 символов'; // Добавляем сообщение  
  }	  
  
}



// Когда поле для ввода имени пользователя получает / теряет фокус, вызываем одну из функций, записанных выше:
el.addEventListener('focus', tipUsername, false); // Событие focus вызывает функцию tipUsername()
el.addEventListener('blur', checkUsername, false);// Событие blur вызывает функцию checkUsername()

/* ВАРИАНТ ДЛЯ ОБЕСПЕЧЕНИЯ СОВМЕСТИМОСТИ С IE8 (и версии ниже)

if (el.addEventListener) {
  el.addEventListener('focus', tipUsername, false);
  el.addEventListener('blur', checkUsername, false);
} else {
  el.attachEvent('onfocus', tipUsername);
  el.attachEvent('onblur', checkUsername);
}

*/