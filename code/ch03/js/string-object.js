﻿// Создаем константу saying для сохранения используемой строкиconst saying = ' Дом, милый дом ';// Создаем переменную msg для хранения сообщения, которое будет отображаться на странице// Определяем длину строки и помещаем полученное значение в переменную msg// Преобразуем строку в верхний регистр и помещаем полученное значение в переменную msg// Преобразуем строку в нижний регистр и помещаем полученное значение в переменную msg// Определяем символ с индексом 11 в строке и помещаем полученное значение в переменную msg// Определяем индекс первого вхождения символов 'ми' в строке и помещаем полученное значение в переменную msg// Определяем индекс последнего экземпляра символа 'м' в строке и помещаем полученное значение в переменную msg// Определяем символы с индексами в диапазоне 6-12 в строке и помещаем полученное значение в переменную msg// Определяем индекс первого вхождения символа 'м' в строке, заменяем его символом 'г' и помещаем полученное значение в переменную msgconst msg = `           <h2>Строка</h2>             <p>${saying}</p>		   <h2>длина</h2>             <p>${saying.length}</p>		   <h2>прописные</h2>		     <p>${saying.toUpperCase()}</p>		   <h2>строчные</h2>		     <p>${saying.toLowerCase()}</p>           <h2>символ с индексом: 12</h2>		     <p>${saying.charAt(12)}</p>		   <h2>первое вхождение "ми"</h2>		     <p>${saying.indexOf('ми')}</p>		   <h2>последнее вхождение "м"</h2>		     <p>${saying.lastIndexOf('м')}</p>		   <h2>символы с индесами: 6-12</h2>		     <p>${saying.substring(6, 12)}</p>		   <h2>замена символов</h2>		     <p>${saying.replace('м', 'г')}</p>`;// Создаем переменную el для записи элемента с идентификатором infovar el = document.getElementById('info');// Записываем сообщение в элементel.innerHTML = msg;