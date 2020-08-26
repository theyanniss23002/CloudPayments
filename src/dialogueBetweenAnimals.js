import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import $ from 'jquery'


$(document).ready(function () {
  // Fakes the loading setting a timeout
  setTimeout(function () {
    $('body').addClass('loaded');
  }, 1000);

  $(".boom-wrap, .trash-wrap, .cube-wrap").on('click', function () {
    let data = $(this).data('class');
    $('body').css('perspective', 'none');
    $('body').css('transform', 'none');
    $('.character-cell').fadeOut(500);
    $(".slider").addClass('active');
    $(`.${data}`).fadeIn(500);
  });
  $(".coin-wrap").on('click', function () {
    let data = $(this).data('class');
    $('body').css('perspective', 'none');
    $('.character-cell').fadeOut(500);
    $(".slider").addClass('active-full');
    $(`.${data}`).fadeIn(500);
  });
  $(".slide-close").on('click', function () {
    $('body').css('perspective', '1px');
    $(".slider").removeClass('active');
    $('.slideshow__card').fadeOut(500);
    $('.character-cell').fadeIn(500)
  });
});


gsap.registerPlugin(ScrollTrigger);
$(document).ready(function () {
  ScrollTrigger.create({
    once: true,
    trigger: '.universe',
    start: 'top 15%',
    onEnter: () => startDialog()
  });

  ScrollTrigger.create({
    once: true,
    trigger: '.universe',
    start: 'top 70%',
    onEnter: () => animalsBack()
  });
});


function startDialog() {
  $('body, html').css({
    'overflow': 'hidden',
    'height': '100vh'
  });
  $('.universe').addClass('blur').fadeIn(1000);
  $('.dialog__animal').css({
    'opacity': 1,
    'z-index': 6
  });
  setTimeout(dogSpeak, 1000)
}

function dogSpeak() {
  $('.dialog__dog').addClass('animate');
  $('.dialog__box_dog').fadeIn(500).delay(3000).fadeOut(500);
  setTimeout(catSpeak, 5000)
}

function catSpeak() {
  $('.dialog__dog').removeClass('animate');
  $('.dialog__cat').addClass('animate');
  $('.dialog__box_cat').fadeIn(500).delay(5000).fadeOut(500);
  setTimeout(endDialog, 6000)
}

function endDialog() {
  $('.dialog__cat').removeClass('animate');
  $('.universe').removeClass('blur');
  $('.dialog').hide()
}

$(document).mouseup(function () {
  if ($('.dialog__dog').hasClass('animate')) {
    $('.dialog__box_dog').hide();
    setTimeout(catSpeak, 500)
  } else if ($('.dialog__cat').hasClass('animate')) {
    $('.dialog__box_cat').hide();
    setTimeout(endDialog, 500)
  }
});

function animalsBack() {
  let width = window.innerWidth;
  $('html, body').animate({scrollTop: $(document).height() - $(window).height()}, 2000);
  gsap.fromTo('.goblin', {
    top: '150%',
    left: '45%',
    bottom: 'unset',
    right: 'unset'
  }, {
    top: '70%',
    duration: 5,
    delay: 1
  });
  gsap.fromTo('.plant', {
    bottom: 'auto',
    left: '-20%',
    top: '0%'
  }, {
    bottom: '0%',
    left: '0%',
    duration: 5,
    delay: 1
  });
  gsap.fromTo('.hand', {
    bottom: 'auto',
    top: '38%',
    left: '-10%'
  }, {
    left: '3%',
    duration: 5,
    delay: 1
  });
  gsap.fromTo('.donut', {
    bottom: 'auto',
    top: '52%',
    left: '-10%'
  }, {
    left: '11%',
    duration: 5,
    delay: 1
  });
  gsap.fromTo('.coin-wrap', {
    bottom: 'auto',
    top: '-160%',
    left: '5%'
  }, {
    top: '1%',
    duration: 6,
    delay: 1
  });
  gsap.fromTo('.octopus', {
    bottom: 'auto',
    top: '-100%',
    left: '39%',
    rotate: 180
  }, {
    top: '3%',
    duration: 6,
    delay: 0.3,
    rotate: 0
  });
  gsap.to('.cat', {
    bottom: 'auto',
    top: '24%',
    left: '36%',
    rotate: 0
  });
  $('.cat').hide();
  gsap.to('.dog', {
    bottom: 'auto',
    top: '3%',
    left: '53%',
    rotate: 0
  });
  $('.dog').hide();
  gsap.fromTo('.boom-wrap', {
    left: '61%',
    top: '-150%',
    right: 'auto',
    bottom: 'auto'
  }, {
    top: '1%',
    duration: 7,
    delay: 1
  });
  gsap.fromTo('.twister', {
    top: '-100%',
    left: '150%',
    bottom: 'auto',
    right: 'auto'
  }, {
    top: '4%',
    left: '82%',
    duration: 5,
    delay: 1
  });
  gsap.fromTo('.eye', {
    left: '150%',
    top: '-100%',
    right: 'auto',
    bottom: 'auto',
    rotate: 0
  }, {
    top: '2%',
    left: '93%',
    duration: 5,
    delay: 2
  });
  gsap.fromTo('.jaws', {
    left: '150%',
    top: '20%',
    right: 'auto',
    bottom: 'auto'
  }, {
    left: '85%',
    duration: 5,
    delay: 1
  });
  gsap.fromTo('.ufo', {
    top: '45%',
    left: '150%',
    right: 'auto',
    bottom: 'auto',
    rotate: 0
  }, {
    left: '87%',
    duration: 5,
    delay: 1
  });
  gsap.fromTo('.star', {
    left: '150%',
    top: '25%',
    right: 'auto',
    bottom: 'auto',
    rotate: 0
  }, {
    left: '78%',
    duration: 4,
  });
  gsap.fromTo('.gold', {
    left: '120%',
    top: '72%',
    right: 'auto',
    bottom: 'auto'
  }, {
    left: '84%',
    duration: 5,
    delay: 1
  });
  gsap.fromTo('.worm', {
    left: '140%',
    top: '59%',
    right: 'auto',
    bottom: 'auto',
    rotate: 0
  }, {
    left: '84%',
    duration: 4,
    delay: 1
  });
  gsap.fromTo('.trash-wrap', {
    top: '200%',
    left: '61%',
    right: 'auto',
    bottom: 'auto',
    rotate: 0,
    width: '16%',
  }, {
    top: '60%',
    duration: 5,
    delay: 1
  });
  $('.trash').css('width', '16vw');
  gsap.fromTo('.sun', {
    top: '25%',
    left: '38%',
    opacity: 0,
    right: 'auto',
    bottom: 'auto',
    scale: 0.1
  }, {
    opacity: 1,
    scale: 1,
    duration: 7,
    delay: 1
  });
  gsap.fromTo('.rocket-wrap', {
    left: '130%',
    right: '-100%',
    top: '32%',
    bottom: 'auto',
  }, {
    left: '60%',
    duration: 3,
    delay: 1
  });
  gsap.fromTo('.ship-wrap', {
    bottom: 'auto',
    left: '-100%',
    top: '42%',
  }, {
    left: '17%',
    duration: 4,
    delay: 1
  });
  gsap.fromTo('.robot', {
    bottom: 'auto',
    left: '-100%',
    top: '63%',
  }, {
    left: '1%',
    duration: 6,
    delay: 2
  });
  gsap.fromTo('.cube-wrap', {
    bottom: 'auto',
    left: '-100%',
    top: '66%',
  }, {
    left: '20%',
    duration: 5,
    delay: 1
  });
  gsap.fromTo('.mini-rocket', {
    bottom: 'auto',
    left: '15%',
    top: '200%',
    rotate: 0
  }, {
    top: '85%',
    duration: 5,
    delay: 1
  });
}
