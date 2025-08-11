

const roles = document.querySelectorAll(".role");
let current = 0;

setInterval(() => {
  roles[current].classList.remove("activeRole");
  current = (current + 1) % roles.length;
  roles[current].classList.add("activeRole");
}, 3000); // 3 giây đổi một lần


document.querySelector(".project-form").addEventListener("submit", function(e) {
  e.preventDefault();
  
  alert("Form submitted!");
});