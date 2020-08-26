// import $ from 'jquery'
// import "scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap";
// import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';
// import {TweenMax} from "gsap/all";
// import {Elastic} from "gsap/all";
//
// $(document).ready(function(){
//     let $obj=$(".modal-cashier, .modal-saas, .modal-qr-code, .modal-coin")
//         ,$overlay=$(".modal-overlay")
//         ,blur=$("#blur-filter").get(0)
//     ;
//
//     function setBlur(v){
//         blur.setAttribute("stdDeviation", v);
//     }
//     function getPos(){
//         return $obj.position();
//     }
//
//     let lastPos=getPos();
//     function update(){
//         let pos=getPos();
//         let limit=20;
//         let dx=Math.min(limit,Math.abs(pos.left-lastPos.left)*0.5);
//         let dy=Math.min(limit,Math.abs(pos.top-lastPos.top)*0.5);
//         setBlur(dx+","+dy);
//         console.log(pos.left)
//         lastPos=pos;
//         requestAnimationFrame(update);
//     }
//     update();
//
//     let isOpen = false;
//     function openModal(){
//         /*$overlay.css({
//           display:"block"
//         })*/
//         TweenMax.to($overlay,0.1,{autoAlpha:1});
//
//         TweenMax.fromTo($obj,0.6,{y:-($(window).height()+$obj.height())},{delay:0.2,y:"0%",ease:Elastic.easeOut,easeParams:[1.1,0.7],force3D:true});
//     }
//     function closeModal(){
//         TweenMax.to($overlay,0.1,{delay:0.55,autoAlpha:0});
//         TweenMax.to($obj,0.55,{y:$(window).height()+$obj.height(),ease:Back.easeIn,force3D:true});
//     }
//     $('.open-modal-cashier, .open-modal-saas, .open-modal-qr-code, .open-modal-coin').click(function(){
//         openModal();
//     })
//     $(".close-modal,.modal-overlay,.input-submit").click(function(){
//         closeModal();
//     })
// })
