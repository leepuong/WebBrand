// Script xử lý popup Bag - toggle khi nhấn .bagBtn hoặc .iconBag

const bagBtn = document.querySelector(".bagBtn");
const iconBag = document.querySelector(".iconBag");
const popupBag = document.querySelector(".popupBag");

// Toggle popupBag khi nhấn .bagBtn hoặc .iconBag
function toggleBagPopup() {
    popupBag.classList.toggle("active");
}

bagBtn.addEventListener("click", toggleBagPopup);
iconBag.addEventListener("click", toggleBagPopup);

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