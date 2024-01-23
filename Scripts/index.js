// import 'boxicons'

// active menu /////////////////////////////////////////////
let menuLi = document.querySelectorAll("nav ul li a");
let section = document.querySelectorAll("section");

function activeMenu() {
  let len = section.length;
  while (--len && window.scrollY + 97 < section[len].offsetTop) {}
  menuLi.forEach((sec) => sec.classList.remove("active"));
  menuLi[len].classList.add("active");
}

activeMenu();
window.addEventListener("scroll", activeMenu);

// toggle icon navbar /////////////////////////////////////////////
let menuIcon = document.querySelector("#menu-icon");
let navList = document.querySelector(".navlist");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navList.classList.toggle("open");
};

window.onscroll = () => {
  menuIcon.classList.remove("bx-x");
  navList.classList.remove("open");
};

// parallax /////////////////////////////////////////////
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show-items");
    } else {
      entry.target.classList.remove("show-items");
    }
  });
});

const scrollScale = document.querySelectorAll(".scroll-scale");
scrollScale.forEach((el) => observer.observe(el));

const scrollBottom = document.querySelectorAll(".scroll-bottom");
scrollBottom.forEach((el) => observer.observe(el));

const scrollTop = document.querySelectorAll(".scroll-top");
scrollTop.forEach((el) => observer.observe(el));
