$(function() {
	setTimeout(function(){

		const listItem = $('li');
		const $listItemText = listItem.text();
		listItem.append(`<i>${$listItemText}</i>`);	

	}, 3000);
	
});