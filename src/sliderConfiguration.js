import $ from 'jquery'

$(document).ready(function () {
    // Fakes the loading setting a timeout
    setTimeout(function() {
      $('body').addClass('loaded');
    }, 1000);

  $(".coin-wrap, .boom-wrap, .trash-wrap, .cube-wrap").on('click', function () {
    let data = $(this).data('class');
    $('body').css('perspective', 'none');
    $('.character-cell').fadeOut(500);
    $(".slider").addClass('active');
    $(`.${data}`).fadeIn(500);
  });
  $(".slide-close").on('click', function () {
    $('body').css('perspective', '1px');
    $(".slider").removeClass('active');
    $('.slideshow__card').fadeOut(500);
    $('.character-cell').fadeIn(500)
  });
});
