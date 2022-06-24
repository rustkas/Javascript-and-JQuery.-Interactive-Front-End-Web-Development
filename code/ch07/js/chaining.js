setTimeout(function(){
$('li[id!="one"]').hide().delay(500).fadeIn(1400); // Точка с запятой указывает на конец цепочки - код может располагаться на отдельных строках	
console.log('timeout 1');
},3000);

setTimeout(function(){
	$('li:first-child').addClass('next');
	console.log('timeout 2', $('li:first-child'));
},6000);

setTimeout(function(){
	$('li.priority').addClass('highlight');
	console.log('timeout 3', $('li.priority'));
},9000);
