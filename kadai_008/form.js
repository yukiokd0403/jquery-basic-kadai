$(function(){
  $('.btn').on('click', function(){
    $('.text-box').val('クリックしました！');
    console.log($('.text-box').val());
  });
});