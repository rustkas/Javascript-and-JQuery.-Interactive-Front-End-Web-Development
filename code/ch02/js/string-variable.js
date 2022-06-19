// Создаем переменные для хранения имени и текста сообщения.
let username;
let message;

// Присваиваем значения этим переменным.
username = 'Катерина';
message = 'Взгляни на мир';

// Получаем элемент с идентификатором name.
const elName = document.getElementById('name');
// Заменяем содержимое этого элемента.
elName.textContent = username;

// Получаем элемент с идентификатором note.
const elNote = document.getElementById('note');
// Заменяем содержимое этого элемента.
elNote.textContent = message;

/* 
ПРИМЕЧАНИЕ: textContent не работает в браузере IE8 и версии ниже
Вы можете использовать innerHTML, но возникает угроза безопасности сайта, как описано в книге:
elName.innerHTML = username;
elNote.innerHTML = message;
*/