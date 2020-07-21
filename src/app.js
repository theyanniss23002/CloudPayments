//style imports
import './css/main.css'
import './sass/main.sass'
import 'animate.css/animate.min.css'

//js imports
import './parallaxMouseMove'
import './parallaxWithScroll'
import './sliderConfiguration'

//dependence imports
import $ from 'jquery'
import * as ScrollMagic from "scrollmagic"; // Or use scrollmagic-with-ssr to avoid server rendering problems
import { TweenMax, TimelineMax } from "gsap";// Also works with TweenLite and TimelineLite
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);
