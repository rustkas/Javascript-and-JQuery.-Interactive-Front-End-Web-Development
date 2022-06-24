$(function() {
  
  setTimeout(function(){
	$('li:lt(2)').removeClass('hot');  
  },3000);
  
  setTimeout(function(){
	$('li').eq(0).addClass('complete');  
  },6000);
  
  setTimeout(function(){
	$('li:gt(2)').addClass('cool');  
  },9000);
  
  
});