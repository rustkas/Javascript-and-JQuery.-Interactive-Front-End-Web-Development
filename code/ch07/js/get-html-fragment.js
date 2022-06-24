const timeInterval = setInterval(function(){
	
	$(function() {
	  const $listHTML = $('ul').html();
	  $('ul').append($listHTML);
	});	
	
}, 2000);

$(function() {
	const list = document.getElementsByTagName('ul')[0];
	list.addEventListener('click',function(){
		clearTimeout(timeInterval);
		console.log('clearTimeout', timeInterval);
	},false);
	  
});	

