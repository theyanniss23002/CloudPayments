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


$(function() {
    $(".coin-wrap").click(function() {
        $('.character-cell').fadeOut(0)
        $(".carousel-case").fadeIn(500);
    });
    $(".slide-close").click(function() {
        $(".carousel-case").fadeOut(0);
        $('.character-cell').fadeIn(500)
    });
});
