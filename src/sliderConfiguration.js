import $ from 'jquery'
require('slick-carousel')

// let $status = $('.slider__numb');
let $slickElement = $('.slideshow');

// $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
//     let i = (currentSlide ? currentSlide : 0) + 1;
//     $status.text(i + ' / ' + slick.slideCount);
// });

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
