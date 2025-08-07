import { setupBagAnimation, playBagAnimation, reverseBagAnimation } from './gsapScroll.js';
// Script xử lý popup Bag - toggle khi nhấn .bagBtn hoặc .iconBag

const bagBtn = document.querySelector(".bagBtn");
const iconBag = document.querySelector(".iconBag");
const popupBag = document.querySelector(".popupBag");
const namePage = document.querySelector(".namePage");
const menu = document.querySelector(".menu");
const popupMenu = document.querySelector(".popupMenu");


setupBagAnimation();
function toggleBagPopup() {
  popupBag.classList.toggle("active");
  if (popupMenu.classList.contains("active")) {
    // Popup mở - play animation
    popupMenu.classList.toggle("active");
}
  if (popupBag.classList.contains("active")) {
    // Popup mở - play animation
    playBagAnimation();
} else {
    // Popup đóng - reverse animation
    reverseBagAnimation();
}
}


function toggleMenuPopup() {
  popupMenu.classList.toggle("active");
  if (popupBag.classList.contains("active")){
    popupBag.classList.toggle("active");
  }
  if (popupMenu.classList.contains("active")) {
    // Popup mở - play animation
    playBagAnimation();
} else {
    // Popup đóng - reverse animation
    reverseBagAnimation();
}
}




document.addEventListener("keydown", function(e) {
  if (e.key === "Escape" && popupBag.classList.contains("active")) {
      toggleBagPopup();
  }
});

bagBtn.addEventListener("click", toggleBagPopup);
iconBag.addEventListener("click", toggleBagPopup);
menu.addEventListener("click", toggleMenuPopup);
namePage.addEventListener("click", toggleMenuPopup);

// Hiệu ứng slide giữa 2 viewProduct khi nhấn lineForProNew

const swiper = new Swiper('.wrapper', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    spaceBetween: 50,
    speed: 1700,
    parallax: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
      },
  
    
  });

