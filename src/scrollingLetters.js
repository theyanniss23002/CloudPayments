import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(".intro__wrap-word-1",
    {
      scale: 1,
    },
    {
      scrollTrigger: {
        trigger: ".anchor",
        toggleActions: "restart none reverse none",
      },
      x: -120,
      y: -100,
      duration: 1,
      scale: 1,
      rotate: -40
    });

gsap.fromTo(".intro__wrap-word-2",
    {
      scale: 1,
    },
    {
      scrollTrigger: {
        trigger: ".anchor",
        toggleActions: "restart none reverse none",
      },
      x: -90,
      y: -130,
      duration: 1,
      scale: 1,
    });

gsap.fromTo(".intro__wrap-word-and",
    {
      scale: 1,
    },
    {
      scrollTrigger: {
        trigger: ".anchor",
        toggleActions: "restart none reverse none",
      },
      x: -60,
      y: -50,
      duration: 1,
      scale: 1,
      rotate: -20
    });

gsap.fromTo(".intro__wrap-word-3",
    {
      scale: 1,
    },
    {
      scrollTrigger: {
        trigger: ".anchor",
        toggleActions: "restart none reverse none",
      },
      x: -30,
      y: -70,
      duration: 1,
      scale: 1,
    });

gsap.fromTo(".intro__wrap-word-4",
    {
      scale: 1,
    },
    {
      scrollTrigger: {
        trigger: ".anchor",
        toggleActions: "restart none reverse none",
      },
      y: -20,
      duration: 1,
      scale: 1,
    });

gsap.fromTo(".intro__wrap-word-5",
    {
      scale: 1,
    },
    {
      scrollTrigger: {
        trigger: ".anchor",
        toggleActions: "restart none reverse none",
      },
      x: 30,
      y: -70,
      duration: 1,
      rotation: 20,
      scale: 1,
    });

gsap.fromTo(".intro__wrap-word-6",
    {
      scale: 1,
    },
    {
      scrollTrigger: {
        trigger: ".anchor",
        toggleActions: "restart none reverse none",
      },
      x: 60,
      y: 20,
      duration: 1,
      rotation: 20,
      scale: 1,
    });

gsap.fromTo(".intro__wrap-word-7",
    {
      scale: 1,
    },
    {
      scrollTrigger: {
        trigger: ".anchor",
        toggleActions: "restart none reverse none",
      },
      x: 90,
      y: -100,
      duration: 1,
      scale: 1,
    });

gsap.fromTo(".intro__wrap-word-8",
    {
      scale: 1,
    },
    {
      scrollTrigger: {
        trigger: ".anchor",
        toggleActions: "restart none reverse none",
      },
      x: 120,
      duration: 1,
      scale: 1,
      rotation: 30,
    });

gsap.fromTo(".intro__wrap-word-9",
    {
      scale: 1,
    },
    {
      scrollTrigger: {
        trigger: ".anchor",
        toggleActions: "restart none reverse none",
      },
      x: 150,
      y: -100,
      duration: 1,
      rotation: 20,
      scale: 1,
    });

gsap.to(".intro__wrap-cursor", {
  scrollTrigger: {
    trigger: ".anchor",
    toggleActions: "restart none reverse none",
  },
  opacity: 0,
  duration: 0.5,
});
