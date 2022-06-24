$(function() {
	
	
	setTimeout(function(){
		$('li:contains("кедровые")').text('миндаль');	
	}, 3000);
	
	setTimeout(function(){
		$('li.hot').html(function() {
		return `<em>${$(this).text()}</em>`;
	  });	
	}, 6000);
	
	setTimeout(function(){
		$('li#one').remove();	
	}, 9000);
  
  
  
});