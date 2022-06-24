$(function() {
	setTimeout(()=>{
	
		$('li').each(function() {
			const ids = this.id;
			$(this).append(`<span class="order"> ${ids}</span>`);
		  });
	
	},3000);	
  
});