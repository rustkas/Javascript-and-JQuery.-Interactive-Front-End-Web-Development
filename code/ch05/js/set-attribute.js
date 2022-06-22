(function (){
	const ids = ['one', 'two', 'three', 'four'];
	const items = new Array(ids.length);
	for(let i = 0; i < items.length; i++){
		items[i] = document.getElementById(ids[i]);
		//console.log(items[i]);
	}
	let previousItem = null;
	const el = document.getElementById('scriptResults');
	for(let i = 0,timeout=1500; i < items.length; i++){
		const item = document.getElementById(ids[i]); // Получаем первый элемент списка
		
		setTimeout(function(){
				
				item.setAttribute('class', 'cool');       // Добавляем к нему атрибут
				if(previousItem !== null) {
					previousItem.setAttribute('class', 'complete');
				}
				previousItem = item;
		}, timeout);
		timeout += 1500;
	}	
	
}());
