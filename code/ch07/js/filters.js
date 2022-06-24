$(function() {
  const $listItems = $('li');

  $listItems.filter('.hot:last').removeClass('hot');
  $('li:not(.hot)').addClass('cool');
  $listItems.has('em').addClass('complete');

  $listItems.each(function() {
    const $this = $(this);
    if ($this.is('.hot')) {
      $this.prepend('Акция! ');
    }
  });

  $('li:contains("мед")').append(' (домашний)');
});