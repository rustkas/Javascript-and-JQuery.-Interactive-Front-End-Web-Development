(function (){
	const ids = ['one', 'two', 'three', 'four'];
	const items = new Array(ids.length);
	for(let i = 0; i < items.length; i++){
		items[i] = document.getElementById(ids[i]);
		//console.log(items[i]);
	}
	
	const el = document.getElementById('scriptResults');
	for(let i = 0,timeout=1500; i < items.length; i++){
		const item = document.getElementById(ids[i]); // Получаем первый элемент списка
		if (item.hasAttribute('class')) {          // Если у него есть атрибут class
			const attr = item.getAttribute('class');   // Получаем атрибут
			setTimeout(function(){
				el.innerHTML = `<p>У элемента ${item.innerText} значение атрибута класс: ${attr}</p>`;	
				console.log(item.innerText, timeout);
				
				
			},timeout);
			timeout += 1500;
		}
	}	
	
}());
