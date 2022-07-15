const pageAnimation = function () {
  let tl = gsap.timeline();

  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".heading-secondary", {
    scrollTrigger: {
      trigger: ".heading-secondary",

      start: "150% 80%",
    },
    x: "3rem",
    opacity: 0,
    duration: 0.6,
  });

  gsap.from(".why__img-1,.why__text-1", {
    scrollTrigger: {
      trigger: ".why__img-1 , .why__text-1",
      start: "-30% 60%",
    },

    x: "5rem",
    opacity: 0,
    duration: 0.6,
  });
  gsap.from(".heading-tertiary-1", {
    scrollTrigger: {
      trigger: ".heading-tertiary-1",

      start: "-80vh 60%",
    },
    y: "5rem",
    opacity: 0,
    duration: 0.4,
  });
  gsap.from(".why__img-2", {
    scrollTrigger: {
      trigger: ".why__img-2",
      start: "0% 60%",
    },

    x: "5rem",
    opacity: 0,
    duration: 0.6,
  });
  gsap.from(".heading-tertiary-2 ", {
    scrollTrigger: {
      trigger: ".heading-tertiary-2 ",
      start: "-80vh 60%",
    },
    y: "5rem",
    opacity: 0,
    duration: 0.4,
  });
  gsap.from(".why__text-2", {
    scrollTrigger: {
      trigger: ".why__text-2 ",
      start: "-50% 60%",
    },
    x: "5rem",
    opacity: 0,
    duration: 0.4,
  });
  tl.from(".wrapper__word", {
    duration: 1,
    opacity: 0,
    stagger: 0.2,
  })
    .to(".wrapper__word", {
      delay: 1,
      stagger: 0.2,
      duration: 0.3,
      opacity: 0,
    })
    .to(".wrapper__logo", {
      duration: 1,
      opacity: 1,
      scale: 1,
    })
    .to(".wrapper", { delay: 1, height: 0 })
    .to(".wrapper__logo", {
      delay: -1,
      opacity: 0,
    })
    .to("html", {
      duration: 0.3,
      ease: "ease-in",
      overflow: "visible",
    })
    .from(".navigation__logo-link, .navigation__burger-line", {
      duration: 0.4,

      opacity: 0,
      stagger: 0.3,
    })
    .from(".navigation__item", {
      duration: 0.3,
      translateY: "-3rem",
      opacity: 0,
      stagger: 0.3,
    })
    .from(".heading-primary", {
      duration: 0.4,
      translateY: "-4rem",
      opacity: 0,
      stagger: 0.4,
    })
    .from(".header__description", {
      opacity: 0,
      translateX: "4rem",
    })
    .from(".header__img-box", {
      duration: 1,
      translateX: "5rem",
      opacity: 0,
    })
    .from(".btn-hero", {
      duration: 0.4,
      opacity: 0,
    });
};
pageAnimation();

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
