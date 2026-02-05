const bars = document.getElementById("bars");
const menuMobile = document.getElementById("menuMobile");
const navbar = document.getElementById("navbar");
const links = menuMobile.querySelectorAll("a");

bars.addEventListener("click", () => {
  if (menuMobile.classList.contains("-translate-y-full")) {
    menuMobile.classList.remove("-translate-y-full", "opacity-0");
    menuMobile.classList.add("translate-y-12", "opacity-100");
  } else {
    menuMobile.classList.remove("translate-y-12", "opacity-100");
    menuMobile.classList.add("-translate-y-full", "opacity-0");
  }
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    navbar.classList.add("shadow-md");
  } else if (window.scrollY === 0) {
    navbar.classList.remove("shadow-md");
  }
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    menuMobile.classList.remove("translate-y-12", "opacity-100");
    menuMobile.classList.add("-translate-y-full", "opacity-0");
  });
});

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {

        entry.target.classList.remove("opacity-0", "-translate-y-6");
        entry.target.classList.add("opacity-100", "translate-y-0");
      } else {

        entry.target.classList.add("opacity-0", "-translate-y-6");
        entry.target.classList.remove("opacity-100", "translate-y-0");
      }
    });
  },
  { threshold: 0.2 }
);

reveals.forEach((el) => observer.observe(el));
