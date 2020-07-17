import './css/main.css'
import './sass/main.sass'
import 'animate.css/animate.min.css'
import $ from 'jquery'

import './parallaxMouseMove'
import './parallaxWithScroll'

import * as ScrollMagic from "scrollmagic"; // Or use scrollmagic-with-ssr to avoid server rendering problems
import { TweenMax, TimelineMax } from "gsap";// Also works with TweenLite and TimelineLite
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";

ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);

// $('body').scroll(function () {
//     $('.intro__wrap-word-1').css('left', 1.8 * 12 * 3 + 'px')
// })

// TweenLite.defaultEase = Linear.easeNone;
// let controller = new ScrollMagic.Controller();
// let tl = new TimelineMax();
// tl.staggerFrom(".box", 1.5, {
//     scale: 0,
//     cycle: {
//         y: [-50, 50]
//     },
//     stagger: {
//         from: "center",
//         amount: 0.75
//     }
// });
//
// let scene = new ScrollMagic.Scene({
//     triggerElement: ".intro",
//     duration: "50%",
//     triggerHook: 0.25
// })
//     .addIndicators({
//         name: "Box Timeline",
//         colorTrigger: "white",
//         colorStart: "white",
//         colorEnd: "white"
//     })
//     .setTween(tl)
//     .addTo(controller);
