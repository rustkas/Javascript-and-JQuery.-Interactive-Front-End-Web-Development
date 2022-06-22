const score = 75;    // Балл
let msg = '';      // Сообщение

function congratulate() {
  msg += 'Поздравляем! ';
}

if (score >= 50) {  // Если балл составляет 50 или выше 
  congratulate();
  msg += 'Переходите к следующему этапу.';
}

const el = document.getElementById('answer');
el.innerHTML = msg;