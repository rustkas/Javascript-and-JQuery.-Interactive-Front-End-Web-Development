$(function() {

  $('li').on('click', function(e) {
    $('li span').remove();
    const date = new Date();
	console.log(date);
	console.log(e);
    //date.setTime(e.timeStamp);
    const clicked = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
    $(this).append(`<span class="date"> ${clicked} ${e.type}</span>`);
  });

});
