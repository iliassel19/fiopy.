const tl = gsap.timeline();

tl.from(".navigation__item", {
  delay: 0.4,
  opacity: 0,
  top: "-4rem",
  stagger: 0.2,
});

gsap.registerPlugin(ScrollTrigger);

const menu = document.querySelector(".navigation__burger");
const menuLines = document.querySelectorAll(".navigation__burger-line");
const menuList = document.querySelector(".navigation__list");
const navigationItems = document.querySelector(".navigation__list");
console.log(document);
// Mobile navigation handler
const menuOpen = function () {
  menu.addEventListener("click", function () {
    menuLines.forEach((line) => line.classList.toggle("active"));
    menuList.classList.toggle("active");
    menu.classList.toggle("active");
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

// nIntersection observer

let options = {
  root: null,
  rootMargin: "-25px",
  threshold: 0.2,
};
const showHeadingWhy = (entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;

    entry.target.classList.add("active");
  });
};
let observer = new IntersectionObserver(showHeadingWhy, options);
const headingWhy = document.querySelector(".why__heading");
observer.observe(headingWhy);

options = {
  root: null,
  rootMargin: "-20px",
  threshold: 0.25,
};
const whyContainer1 = document.querySelector(".why__container-1");
const whyHeadingTertiary1 = document.querySelector(".heading-tertiary-1");
const whyText1 = document.querySelector(".why__text-1");
const whyImg1 = document.querySelector(".why__img-1");
const showWhyBox1 = (entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    whyHeadingTertiary1.classList.add("active");
    whyText1.classList.add("active");
    whyImg1.classList.add("active");
  });
};

observer = new IntersectionObserver(showWhyBox1, options);
observer.observe(whyContainer1);

const whyContainer2 = document.querySelector(".why__container-2");
const whyHeadingTertiary2 = document.querySelector(".heading-tertiary-2");
const whyText2 = document.querySelector(".why__text-2");
const whyImg2 = document.querySelector(".why__img-2");
const showWhyBox2 = (entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    console.log(entry);
    whyHeadingTertiary2.classList.add("active");
    whyText2.classList.add("active");
    whyImg2.classList.add("active");
  });
};

options = {
  root: null,
  rootMargin: "-120px",
  threshold: 0.25,
};
observer = new IntersectionObserver(showWhyBox2, options);
observer.observe(whyContainer2);
