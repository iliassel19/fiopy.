const tl = gsap.timeline();

tl.from(".navigation__item", {
  delay: 0.4,
  opacity: 0,
  top: "-4rem",
  stagger: 0.2,
});

const menu = document.querySelector(".navigation__burger");
const menuLines = document.querySelectorAll(".navigation__burger-line");
const menuList = document.querySelector(".navigation__list");
const navigationItems = document.querySelector(".navigation__list");

// Mobile navigation handler
const menuOpen = function () {
  menu.addEventListener("click", function () {
    menuLines.forEach((line) => line.classList.toggle("active"));
    menuList.classList.toggle("active");
  });
};
menuOpen();

// Sublist of navigation elements handler
const sublistOpen = function () {
  navigationItems.addEventListener("click", function (e) {
    const targeted = e.target?.closest(".navigation__link");
    const subList = targeted?.nextElementSibling;
    if (!subList) return;
    targeted.parentElement.classList.toggle("active");
    subList.classList.toggle("active");
  });
};
sublistOpen();

const smoothScroll = function (e) {
  const links = document.querySelectorAll(".navigation__scroll");

  links.forEach((link) =>
    link.addEventListener("click", function (e) {
      e.preventDefault();

      // this.getAttribute("href") = #why (id of section)
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    })
  );
};

smoothScroll();
