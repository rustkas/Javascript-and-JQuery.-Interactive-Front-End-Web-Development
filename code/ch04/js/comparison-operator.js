﻿const pass = 500;   // Проходной баллconst score = 90;  // Набранный балл// Проверяем, прошел ли пользователь тестlet hasPassed;if(score >= pass) {	hasPassed = 'пройден';} else {	hasPassed = 'не пройден';}	// Выводим сообщение на страницеconst el = document.getElementById('answer');el.innerHTML = `Прохождение уровня: ${hasPassed}`;