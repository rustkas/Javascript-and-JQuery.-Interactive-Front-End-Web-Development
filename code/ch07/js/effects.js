$(function() {

  $('h2').hide().slideDown();
  const $li = $('li');
  $li.hide().each(function(index) {
    $(this).delay(700 * index).fadeIn(700);
  });

  $li.on('click', function() {
    $(this).fadeOut(700);
  });

});