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