import $ from 'jquery'
require('slick-carousel')

let $slickElement = $('.slideshow');

$slickElement.slick({
    autoplay: false,
    prevArrow: $('.btn__prev'),
    nextArrow: $('.btn__next'),
    variableWidth: false,
    responsive: [
        {
            breakpoint: 600,
            settings: {
                rows: 1,
                dots: true,
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }
    ]
});

$('div[data-slide]').click(function(e) {
    e.preventDefault();
    let slideno = $(this).data('slide');
    $('.slideshow').slick('slickGoTo', slideno - 1);
});

$(function() {
    $(".coin-wrap, .boom-wrap, .trash-wrap, .cube-wrap").click(function() {
        $('.character-cell').fadeOut(0)
        $(".carousel-case").fadeIn(700);
    });
    $(".slide-close").click(function() {
        $(".carousel-case").fadeOut(0);
        $('.character-cell').fadeIn(1000)
    });
});
