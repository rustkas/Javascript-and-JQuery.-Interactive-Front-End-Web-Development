const score1 = 8;   // Балл за первый этап
const score2 = 8;   // Балл за второй этап
const pass1 = 6;    // Проходной балл за первый этап
const pass2 = 6;    // Проходной балл за второй этап

// Проверяем, прошел ли пользователь оба этапа, результат сохраняем в переменной
let passBoth;

if ( (score1 >= pass1) && (score2 >= pass2) ) {
	passBoth ='Да.';
} else {
	passBoth ='Нет.';
} 

// Создаем сообщение
const msg = `Оба этапа пройдены? ${passBoth}`;

// Выводим сообщение на страницу
const el = document.getElementById('answer');
el.innerHTML = msg;