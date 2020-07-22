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
  $('.universe').addClass('blur');
  $('.dialog').show();
  $('.dialog__animal').fadeIn(500).delay(15000).fadeOut(300);
  setTimeout(function() {
    $('.dialog__cat').addClass('animate');
    $('.dialog__box_cat').fadeIn(500).delay(15000).fadeOut(500);
  }, 6000);
  setTimeout(function() {
    $('.dialog__cat').removeClass('animate');
  }, 5000);
  setTimeout(function() {
    $('.dialog__dog').addClass('animate');
    $('.dialog__box_dog').fadeIn(500).delay(3000).fadeOut(500);
  }, 1000);
  setTimeout(function() {
    $('.dialog__dog').removeClass('animate');
    $('.universe').removeClass('blur');
    $('.dialog').hide()
  }, 16000);
}
