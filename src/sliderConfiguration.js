import $ from 'jquery'

$(document).ready(function () {
  let width = window.innerWidth;
  if (width >= 1200) {
    // Fakes the loading setting a timeout
    setTimeout(function() {
      $('body').addClass('loaded');
    }, 10000);
  }

  $(".coin-wrap, .boom-wrap, .trash-wrap, .cube-wrap").on('click', function () {
    let data = $(this).data('class');
    $('body').css('perspective', 'none');
    $('.fly').addClass('blur');
    $('.character-cell').fadeOut(500);
    $(".slider").addClass('active');
    $(`.${data}`).fadeIn(500);
  });
  $(".slide-close").on('click', function () {
    $('body').css('perspective', '1px');
      $('.fly').removeClass('blur');
    $(".slider").removeClass('active');
    $('.slideshow__card').fadeOut(500);
    $('.character-cell').fadeIn(500)
  });
});
