const score1 = 90;     // Балл за первый этап
const score2 = 95;     // Балл за второй этап
const highScore1 = 75; // Рекорд за первый этап
const highScore2 = 95; // Рекорд за второй этап

// Проверяем, превышают ли набранные очки актуальные рекорды
let comparison;
if( (score1 + score2) > (highScore1 + highScore2) ) {
	comparison = 'Да.';
}else {
	comparison = 'Нет.';	
}

// Выводим сообщение на страницу
const el = document.getElementById('answer');
el.innerHTML = `Есть новый рекорд? ${comparison}`;