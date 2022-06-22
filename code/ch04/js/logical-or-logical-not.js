const score1 = 8;   // Балл за первый этап
const score2 = 8;   // Балл за второй этап
const pass1 = 6;    // Проходной балл за первый этап
const pass2 = 6;    // Проходной балл за второй этап

// Проверяем, прошел ли пользователь хотя бы один этап, результат сохраняем в переменной
const minPass = (score1 >= pass1) || (score2 >= pass2);
let answer;

if( !minPass ) {
	answer = 'Да.';
}else {
	answer = 'Нет.';
}

// Создаем сообщение
const msg = `Требуется ли пересдача? ${answer}`;

// Выводим сообщение на страницу
const el = document.getElementById('answer');
el.innerHTML = msg;