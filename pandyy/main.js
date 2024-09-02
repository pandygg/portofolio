// scroll
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").classList.remove("show");
  } else {
    document.getElementById("header").classList.add("show");
  }
  prevScrollpos = currentScrollPos;
};

// tugel class active
const menuSection = document.querySelector(".menu-section");

// jika di klik
document.querySelector("#menu").onclick = () => {
  menuSection.classList.toggle("active");
};

// di luar tugel
let menu = document.querySelector("#menu");

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !menuSection.contains(e.target)) {
    menuSection.classList.remove("active");
  }
});

// close tag active in bang

document.querySelector("#close").onclick = () => {
  menuSection.classList.remove("active");
};

// ttyped maddboldt
var typed = new Typed(".text-type", {
  strings: ["Fullstack Developer", "Youtuber", "Superhero"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

// scroll reveal
ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".homepage", { delay: 500 });
