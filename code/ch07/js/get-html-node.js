$(function() {
  const listItem = $('li');
  const $listItemHTML = listItem.html();
  listItem.append(`<i>${$listItemHTML}</i>`);
});