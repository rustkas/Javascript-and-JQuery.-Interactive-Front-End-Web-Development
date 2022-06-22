const pass = 50;      // Проходной балл
const score = 75;    // Актуальный балл
let msg;            // Сообщение

// Выбор сообщения для вывода на экран в зависимости от количества баллов

if (score > pass) {
  msg = 'Поздравляем! Переходите к следующему этапу!';
} else {
  msg = 'Попробуйте снова...';
}

const el = document.getElementById('answer');
el.textContent = msg;