import $ from 'jquery'
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
let vw = (coef) => window.innerWidth * (coef / 100);

function showScroll() {
  setTimeout(function () {
    $('.intro__wrap-cursor').css('opacity', '1');
    $('body').css({
      'overflow-y': 'scroll',
      'width': '100%'
    });
  }, 600)
}

gsap.fromTo(".intro__wrap-word h1",
    {
      opacity: 0,
      z: vw(-2)
    },
    {
      opacity: 1,
      z: 0,
      duration: 1.5,
      delay: 1,
      onComplete: showScroll
    });
gsap.to(".intro__wrap-cursor", {
  scrollTrigger: {
    trigger: ".intro",
    toggleActions: "restart none none none",
    start: "bottom bottom",
    end: "1px top",
    onEnterBack: () => $('.intro__wrap-cursor').css('opacity', 1)
  },
  opacity: 0,
  duration: 0.5,
});
