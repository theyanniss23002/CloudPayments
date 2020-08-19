import $ from 'jquery';
import {gsap} from "gsap";
import {TimelineMax} from "gsap/all";
import ScrollMagic from 'scrollmagic';
import "scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap";
import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';

let width = window.innerWidth;
let vh = (coef) => window.innerHeight * (coef / 100);

$(document).ready(function () {
  goScroll()
});

function goScroll() {
  if (width >= 1200) {
    let controller = new ScrollMagic.Controller();
    let timeline = new TimelineMax();
    timeline
        .fromTo('h1', 1, {
          y: 0
        }, {
          y: vh(-200)
        }, '-=1')
        .fromTo('.img__top-middle', 1, {
          top: vh(88)
        }, {
          top: '-=2%'
        }, '-=1')
        .fromTo('.img__top-right', 1, {
          top: vh(7)
        }, {
          top: '-=2%'
        }, '-=1')
        .fromTo('.img__middle-middle', 1, {
          top: vh(45)
        }, {
          top: '-=2%'
        }, '-=1')
        .fromTo('.img__bottom-left', 1, {
          top: vh(85)
        }, {
          top: '-=4%'
        }, '-=1')
        .fromTo('.img__bottom-middle', 1, {
          top: vh(80)
        }, {
          top: '-=3%'
        }, '-=1')
        .fromTo('.img__bottom-right', 1, {
          top: vh(10)
        }, {
          top: '-=5%'
        }, '-=1')
        .fromTo('.img__bottom-null', 1, {
          top: vh(88)
        }, {
          top: '-=3%'
        }, '-=1')
        .fromTo('.fly', 1, {
          top: '0%'
        }, {
          top: vh(5)
        }, '-=1')
        .fromTo('.fly__star_first_big', 1, {
          top: vh(100)
        }, {
          top: '-=7%'
        }, '-=1')
        .fromTo('.fly__star_first_small-2', 1, {
          top: vh(102)
        }, {
          top: '-=4%'
        }, '-=1')
        .fromTo('.fly__star_first_small-3', 1, {
          top: vh(100)
        }, {
          top: '-=4%'
        }, '-=1')
        .fromTo('.fly__star_second_small-3', 1, {
          top: vh(200)
        }, {
          top: '-=4%'
        }, '-=1')
        .fromTo('.fly__star_second_big', 1, {
          top: vh(210)
        }, {
          top: '-=8%'
        }, '-=1')
        .fromTo('.fly__star_second_small-2', 1, {
          top: vh(250)
        }, {
          top: '-=3%'
        }, '-=1')
        .fromTo('.fly__star_third_small-3', 1, {
          top: vh(290)
        }, {
          top: '-=4%'
        }, '-=1')
        .fromTo('.fly__star_third_big', 1, {
          top: vh(320)
        }, {
          top: '-=7%'
        }, '-=1')
        .fromTo('.fly__star_fourth_small-3', 1, {
          top: vh(400)
        }, {
          top: '-=4%'
        }, '-=1')
        .fromTo('.fly__star_fourth_small-2', 1, {
          top: vh(430)
        }, {
          top: '-=4%'
        }, '-=1')
        .fromTo('.fly__star_fourth_big', 1, {
          top: vh(455)
        }, {
          top: '-=7%'
        }, '-=1')
        .fromTo('.fly__star_fourth_small', 1, {
          top: vh(440)
        }, {
          top: '-=5%'
        }, '-=1')
        .fromTo('.fly__star_fith_small', 1, {
          top: vh(510)
        }, {
          top: '-=4%'
        }, '-=1')
        .fromTo('.fly__star_fith_small-2', 1, {
          top: vh(550)
        }, {
          top: '-=4%'
        }, '-=1')
        .fromTo('.fly__star_sixth_small-1', 1, {
          top: vh(630)
        }, {
          top: '-=3%'
        }, '-=1')
        .fromTo('.fly__star_sixth_small-3', 1, {
          top: vh(620)
        }, {
          top: '-=3%'
        }, '-=1')
        .fromTo('.fly__star_sixth_small', 1, {
          top: vh(750)
        }, {
          top: '-=20%'
        }, '-=1')
        .fromTo('.fly__star_seventh_small', 1, {
          top: vh(800)
        }, {
          top: '-=20%',
        }, '-=1')
    let scene = new ScrollMagic.Scene({
      triggerElement: '#intro',
      triggerHook: 0,
      duration: '700%'
    })
        .setTween(timeline)
        .setPin('#intro')
        .addTo(controller);
    gsap.to('.jaws', {
      scrollTrigger: {
        trigger: '.jaws',
        toggleActions: 'restart none reverse none',
        scrub: 1
      },
      bottom: '+=30%'
    })
    gsap.to('.cube-wrap', {
      scrollTrigger: {
        trigger: '.cube-wrap',
        toggleActions: 'restart none reverse none',
        start: 'center 70%',
        scrub: 1
      },
      bottom: '-=30%'
    })
    gsap.to('.donut', {
      scrollTrigger: {
        trigger: '.donut',
        toggleActions: 'restart none reverse none',
        scrub: 1
      },
      bottom: '+=30%',
      left: '+=5%'
    })
    gsap.to('.plant', {
      scrollTrigger: {
        trigger: '.plant',
        toggleActions: 'restart none reverse none',
        scrub: 1
      },
      bottom: '+=20%'
    })
    gsap.to('.dog', {
      scrollTrigger: {
        trigger: '.dog',
        toggleActions: 'restart none reverse none',
        scrub: 1
      },
      bottom: '+=20%',
      scale: 0.8,
      rotate: -100
    })
    gsap.to('.sun', {
      scrollTrigger: {
        trigger: '.sun',
        toggleActions: 'restart none reverse none',
        scrub: 1
      },
      bottom: '+=20%',
    })
    gsap.to('.robot', {
      scrollTrigger: {
        trigger: '.robot',
        toggleActions: 'restart none reverse none',
        scrub: 1
      },
      bottom: '+=30%',
    })
    gsap.to('.ship-wrap', {
      scrollTrigger: {
        trigger: '.ship-wrap',
        toggleActions: 'restart none reverse none',
        start: 'center 70%',
        scrub: 1
      },
      bottom: '-=30%'
    })
    gsap.to('.trash-wrap', {
      scrollTrigger: {
        trigger: '.trash-wrap',
        toggleActions: 'restart none reverse none',
        start: 'center 70%',
        scrub: 1
      },
      bottom: '-=40%',
      rotate: 40,
    })
    gsap.to('.hand', {
      scrollTrigger: {
        trigger: '.hand',
        toggleActions: 'restart none reverse none',
        scrub: 1
      },
      bottom: '+=30%',
    })
    gsap.to('.ufo', {
      scrollTrigger: {
        trigger: '.ufo',
        toggleActions: 'restart none reverse none',
        scrub: 1
      },
      bottom: '+=30%',
      left: '-=10%',
      scale: 1.1,
      rotate: 10
    })
    gsap.to('.cat', {
      scrollTrigger: {
        trigger: '.cat',
        toggleActions: 'restart none reverse none',
        scrub: 1
      },
      bottom: '+=20%',
      rotate: 15
    })
    gsap.to('.gold', {
      scrollTrigger: {
        trigger: '.gold',
        toggleActions: 'restart none reverse none',
        scrub: 1
      },
      bottom: '+=30%',
    })
    gsap.to('.boom-wrap', {
      scrollTrigger: {
        trigger: '.boom-wrap',
        toggleActions: 'restart none reverse none',
        start: 'center 70%',
        scrub: 1
      },
      bottom: '-=25%',
    })
    gsap.to('.eye', {
      scrollTrigger: {
        trigger: '.eye',
        toggleActions: 'restart none reverse none',
        scrub: 1
      },
      bottom: '+=20%',
      scale: 0.85,
      rotate: 20
    })
    gsap.to('.star', {
      scrollTrigger: {
        trigger: '.star',
        toggleActions: 'restart none reverse none',
        scrub: 1
      },
      left: '+=10%',
      bottom: '+=10%',
      rotate: -10
    })
    gsap.to('.worm', {
      scrollTrigger: {
        trigger: '.worm',
        toggleActions: 'restart none reverse none',
        scrub: 1
      },
      left: '-=10%',
      bottom: '+=20%',
    })
    gsap.to('.worm', {
      scrollTrigger: {
        trigger: '.worm',
        toggleActions: 'restart none reverse none',
        scrub: 1,
        start: 'top 60%'
      },
      rotate: 250
    })
    gsap.to('.mini-rocket', {
      scrollTrigger: {
        trigger: '.mini-rocket',
        toggleActions: 'restart none reverse none',
        scrub: 1
      },
      bottom: '+=10%',
    })
    gsap.to('.rocket-wrap', {
      scrollTrigger: {
        trigger: '.rocket-wrap',
        toggleActions: 'restart none reverse none',
        start: 'center 80%',
        scrub: 1
      },
      bottom: '-=15%',
      left: '-=30',
      scale: 1.15
    })
    gsap.to('.octopus', {
      scrollTrigger: {
        trigger: '.octopus',
        toggleActions: 'restart none reverse none',
        scrub: 1
      },
      bottom: '+=25%',
      rotate: 150
    })
    gsap.to('.coin-wrap', {
      scrollTrigger: {
        trigger: '.coin-wrap',
        toggleActions: 'restart none reverse none',
        start: 'center 80%',
        scrub: 1
      },
      bottom: '-=25%',
    })
    gsap.to('.goblin', {
      scrollTrigger: {
        trigger: '.goblin',
        toggleActions: 'restart none reverse none',
        scrub: 1
      },
      bottom: '+=20%',
    })
    gsap.to('.twister', {
      scrollTrigger: {
        trigger: '.twister',
        toggleActions: 'restart none reverse none',
        scrub: 1
      },
      bottom: '+=25%',
    })
  }
}