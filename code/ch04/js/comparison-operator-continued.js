const score1 = 90;     // Балл за первый этап
const score2 = 95;     // Балл за второй этап
const highScore1 = 75; // Рекорд за первый этап
const highScore2 = 95; // Рекорд за второй этап

// Проверяем, превышают ли набранные очки актуальные рекорды
const comparison = (score1 + score2) > (highScore1 + highScore2);

// Выводим сообщение на страницу
const el = document.getElementById('answer');
el.innerHTML = 'Новый рекорд: ' + comparison;