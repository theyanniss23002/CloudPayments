import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import $ from 'jquery'

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
  trigger: '.universe',
  start: 'top 15%',
  onEnter: () => startDialog(),
  once: true
});

ScrollTrigger.create({
  trigger: '.universe',
  start: 'top 70%',
  onEnter: () => animalsBack(),
});

function startDialog() {
  $('.universe').addClass('blur').fadeIn(1000);
  $('.dialog').fadeIn(1000).delay(1000);
  $('.dialog__animal').fadeIn(500);
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

$(document).mouseup(function (){
  let div = $(".dialog");
  if ($('.dialog__dog').hasClass('animate') ) {
    $('.dialog__box_dog').hide();
    setTimeout(catSpeak, 500)
  } else if ( $('.dialog__cat').hasClass('animate') ) {
    $('.dialog__box_cat').hide();
    setTimeout(endDialog, 500)
  }
});

function animalsBack() {
  $('html, body').animate({scrollTop: $(document).height() - $(window).height()}, 2000);
  $('body').css('overflow-y', 'hidden');
  gsap.fromTo('.goblin', {
    bottom: '-50%',
    left: '45%'
  }, {
    bottom: '10%',
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
    top: '2%',
    duration: 7,
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
    bottom: 'auto',
    left: 'auto',
    top: '-200%',
    right: '22%'
  }, {
    top: '1%',
    duration: 7,
    delay: 1
  });
  gsap.fromTo('.twister', {
    bottom: 'auto',
    left: 'auto',
    top: '-100%',
    right: '-100%'
  }, {
    top: '4%',
    right: '8%',
    duration: 5,
    delay: 1
  });
  gsap.fromTo('.eye', {
    bottom: 'auto',
    left: 'auto',
    top: '-100%',
    right: '-100%',
    rotate: 0
  }, {
    top: '2%',
    right: '0%',
    duration: 5,
    delay: 3
  });
  gsap.fromTo('.jaws', {
    bottom: 'auto',
    left: 'auto',
    top: '20%',
    right: '-100%'
  }, {
    right: '0%',
    duration: 5,
    delay: 1
  });
  gsap.fromTo('.ufo', {
    bottom: 'auto',
    left: 'auto',
    top: '45%',
    right: '-100%',
    rotate: 0
  }, {
    right: '2%',
    duration: 5,
    delay: 1
  });
  gsap.fromTo('.star', {
    bottom: 'auto',
    left: 'auto',
    top: '32%',
    right: '-70%',
    rotate: 0
  }, {
    right: '16%',
    duration: 4,
    delay: 0.3
  });
  gsap.fromTo('.gold', {
    bottom: 'auto',
    left: 'auto',
    top: '69%',
    right: '-100%'
  }, {
    right: '10%',
    duration: 5,
    delay: 2
  });
  gsap.fromTo('.worm', {
    bottom: 'auto',
    left: 'auto',
    top: '40%',
    right: '-70%',
    rotate: 0
  }, {
    right: '11%',
    duration: 4,
    delay: 1
  });
  gsap.fromTo('.trash-wrap', {
    bottom: 'auto',
    top: '200%',
    left: 'auto',
    right: '23%',
    rotate: 0,
    width: '16%',
  }, {
    top: '59%',
    duration: 5,
    delay: 1
  });
  $('.trash').css('width', '16vw');
  gsap.fromTo('.sun', {
    bottom: 'auto',
    top: '25%',
    left: 'auto',
    right: '41%',
    opacity: 0,
    scale: 0.1
  }, {
    opacity: 1,
    scale: 1,
    duration: 7,
    delay: 1
  });
  gsap.fromTo('.rocket-wrap', {
    bottom: 'auto',
    left: 'auto',
    right: '-100%',
    top: '29%',
  }, {
    right: '28%',
    duration: 3,
    delay: 1
  });
  gsap.fromTo('.ship-wrap', {
    bottom: 'auto',
    left: '-100%',
    top: '42%',
  }, {
    left: '15%',
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
    delay: 3
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
