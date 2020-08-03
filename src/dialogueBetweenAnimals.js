import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import $ from 'jquery'
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
  trigger: '.universe',
  start: 'top 15%',
  onEnter: ()=> startDialog(),
  once: true
});

function startDialog() {
  $('.universe').addClass('blur').fadeIn(1000);
  $('.dialog').fadeIn(1000).delay(1000);
  $('.dialog__animal').fadeIn(500).delay(12000).fadeOut(500);
  setTimeout(function() {
    $('.dialog__cat').addClass('animate');
    $('.dialog__box_cat').fadeIn(500).delay(12000).fadeOut(500);
  }, 4500);
  setTimeout(function() {
    $('.dialog__cat').removeClass('animate');
  }, 3000);
  setTimeout(function() {
    $('.dialog__dog').addClass('animate');
    $('.dialog__box_dog').fadeIn(500).delay(3000).fadeOut(500);
  }, 100);
  setTimeout(function() {
    $('.dialog__dog').removeClass('animate');
    $('.universe').removeClass('blur');
    $('.dialog').hide()
  }, 12000);
}
