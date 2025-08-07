import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);




let tl = gsap.timeline({ paused: true });

export function setupBagAnimation() {
    
    const flyingImage1 = document.querySelector(".boxFlying1");
    const flyingImage2 = document.querySelector(".boxFlying2");
    const flyingImage3 = document.querySelector(".boxFlying3");
    const flyingImage4 = document.querySelector(".boxFlying4");
    const flyingImage5 = document.querySelector(".boxFlying5");
    
    
    
    // Thiết lập initial state cho hình ảnh
    gsap.set(flyingImage1, {
        y: "-1213px",
        x: "28%",
        rotate: 332    
    });
    gsap.set(flyingImage2, {
        y: "-831px",
        x: "-2971px",
        rotate: 14
    });
    gsap.set(flyingImage3, {
        y: "-643px",
        x: "1506px",
        rotate: 348
    });
    gsap.set(flyingImage4, {
        y: "-569px",
        x: "-3036px",
        rotate: 10    
    });
    gsap.set(flyingImage5, {
        y: "288%",
        x: "-100%",
        rotate: 353
    });
    
    
    tl.to(flyingImage1, {
        duration: 0.5,
        y: "-618px",
        x: "-10%",
        rotate: 332,
        ease: "power4.out"
    }, 0.35)
      .to(flyingImage2, { 
        duration: 0.55,
        y: "-105px",
        x: "-86px",
        rotate: 14,
        ease: "power4.out"
      }, 0.4)
      .to(flyingImage3, { 
        duration: 0.6,
        y: "-248px",
        x: "-333px",
        rotate: 348,
        ease: "power4.out"
       }, 0.35)
      .to(flyingImage4, {
        duration: 0.65,
        y: "-26px",
        x: "-93px",
        rotate: 10,
        ease: "power4.out"
      }, 0.4)
      .to(flyingImage5, { 
        duration: 0.7,
        y: "-215%",
        x: "-5%",
        rotate: 353,
        ease: "power4.out"
    }, 0.35);

}

export function playBagAnimation() {
    tl.play();
  }
  
export function reverseBagAnimation() {
    tl.reverse();
  }

