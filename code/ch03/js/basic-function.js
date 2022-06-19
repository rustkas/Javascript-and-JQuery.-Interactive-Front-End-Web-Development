// Создаем переменную с именем msg для хранения сообщения
const msg = 'Подпишитесь на нашу рассылку и получите скидку 10%!';

// Создаем функцию для обновления содержимого элемента, которому в качестве идентификатора присвоено сообщение
function updateMessage() {
  const el = document.getElementById('message');
  el.textContent = msg;
}

// Вызываем функцию

setTimeout(updateMessage,2000);