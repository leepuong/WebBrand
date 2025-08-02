import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);



gsap.to(".pageLayer2", {
    scrollTrigger: {
        trigger: ".pageLayer2",
        start: "110% bottom",
        end: "top top",
        endTrigger: ".pageLayer3",
        pin: true,
        pinSpacing: false,
        scrub: true,
        // markers: true,
    }
});




ScrollTrigger.create({
    trigger: ".pageLayer3",
    start: "50% bottom",
    endTrigger: ".pageLayer3",
    end: "bottom top",
    // markers: true,
    onEnter: () => {
        document.querySelector(".pageLayer1").style.position = "sticky";
    },
    onLeave: () => {
        document.querySelector(".pageLayer1").style.position = "static";
    },
    onEnterBack: () => {
        document.querySelector(".pageLayer1").style.position = "sticky";
    },
    onLeaveBack: () => {
        document.querySelector(".pageLayer1").style.position = "static";
    }
});