function checkUsername() {                             // Объявляем функцию
  const elMsg = document.getElementById('feedback');     // Получаем элемент обратной связи
  if (this.value.length < 5) {                         // Если имя пользователя слишком короткое
    elMsg.textContent = 'Имя пользователя должно содержать не менее 5 символов'; // Указываем сообщение
  } else {                                             // Иначе
    elMsg.textContent = '';                            // Сбрасываем сообщение
  }
}

function checkUsername2() {                             // Объявляем функцию
  const elMsg = document.getElementById('feedback');     // Получаем элемент обратной связи
  if (this.value.length > 5) {                         // Если имя пользователя слишком короткое
    elMsg.textContent = 'Всё в порядке'; // Указываем сообщение
  } else {                                             // Иначе
    elMsg.textContent = '';                            // Сбрасываем сообщение
  }
  this.className = '';
}

const elUsername = document.getElementById('username');  // Получаем имя, введенное пользователем
// При выходе элемента из фокуса вызвать функцию checkuserName()

elUsername.addEventListener('blur', checkUsername, false);
elUsername.addEventListener('blur', checkUsername2, false);