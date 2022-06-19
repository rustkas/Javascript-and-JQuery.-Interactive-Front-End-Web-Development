// Создаем переменную msg для хранения сообщения

// Определяем ширину области просмотра в окне браузера
const window_innerWidth = window.innerWidth;
// Определяем высоту окна браузера
const window_innerHeight = window.innerHeight;
// Обнаруживаем число элементов в объекте history браузера и и добавляем полученное значение в переменную msg
const history_count = window.history.length;
// Определяем ширину экрана
const screen_width = window.screen.width;
// Определяем высоту экрана
const screen_height = window.screen.height;

//  Добавляем полученные значения в переменную msg
const msg = `<h2>Окно браузера</h2>
              <p>ширина: ${window_innerWidth}</p>
	          <p>высота: ${window_innerHeight}</p>
			<h2>история</h2>
			  <p>элементов: ${history_count}</p>
			<h2>экран</h2>
			  <p>ширина: ${screen_width}</p>
			  <p>высота: ${screen_height}</p>
	`;

// Создаем переменную el для записи элемента с идентификатором info
const el = document.getElementById('info');
// Записываем сообщение в элемент
el.innerHTML = msg;

// Определяем местонахождение текущей страницы и выводим полученное значение на консоль
console.log(`Текущая станица: ${window.location}`);