$(function() {
  setTimeout(() => {
	$('li#three').removeClass('hot');
	console.log('action 1');
  }, 3000);
  
  setTimeout(() => {
	$('li.hot').addClass('favorite');  
	console.log('action 2');
  }, 6000);
  
  setTimeout(() => {
	$('ul').attr('id', 'group');  
	console.log('action 3');
  }, 9000);
  
});