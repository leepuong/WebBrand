import { setupBagAnimation, playBagAnimation, reverseBagAnimation } from './gsapPopup.js';
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



