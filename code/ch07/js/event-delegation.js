$(function() {
  let listItem, itemStatus, eventType;

  $('ul').on(
    'click mouseover',
    ':not(#four)',
    {status: 'important2'},
    function(e) {
      listItem = `Элемент: ${e.target.textContent}'<br />`;
      itemStatus = `Состояние: ${e.data.status}<br />`;
      eventType = `Событие: ${e.type}`;
      $('#notes').html(`${listItem}${itemStatus}${eventType}`);
    }
  );

});