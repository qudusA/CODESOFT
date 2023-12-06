const headerContainer = document.querySelector(".tab");

// sticky
const headerCords = document.querySelector(".about-section");

const header = document.querySelector(".header");
const coords = headerCords.getBoundingClientRect();

// lazy loading
const sections = document.querySelectorAll(".section");

// skill title name

const faa = document.querySelectorAll(".faa");
// console.log(faa);

// time in footer
const time = document.querySelector(".time");

// select class
const select = document.querySelector(".select");

// darkmode

const darkBtn = document.querySelector(".dark-mode-btn2");

// console.log(darkBtn);

darkBtn.addEventListener("click", (e) => {
  e.currentTarget.classList.toggle("dark-mode-btn3");
  if (e.currentTarget.classList.contains("dark-mode-btn3")) {
    document.documentElement.classList.add("roots");
  } else {
    document.documentElement.classList.remove("roots");
  }
});

headerContainer.addEventListener("click", (e) => {
  e.preventDefault();

  // console.log(
  //   e.target.closest(".tab-child")?.querySelector("a").getAttribute("href")
  // );

  const att = e.target
    .closest(".tab-child")
    ?.querySelector("a")
    .getAttribute("href");

  // const pos = document.querySelector(att).getBoundingClientRect();
  // console.log("this", window.scrollY, pos.top);

  // window.scrollTo({
  //   top: pos.top + window.scrollY - 300,
  //   behavior: "smooth",
  // });

  document.querySelector(att)?.scrollIntoView({ behavior: "smooth" });

  // console.log(+window.screenY);
});

// window.addEventListener("scroll", (e) => {
//   if (window.scrollY > coords.top) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// });

const headerHight = header.getBoundingClientRect().height;

console.log(headerHight);

const headerFunc = (entries, observer) => {
  const [entry] = entries;
  // console.log(entry.isIntersecting);
  if (!entry.isIntersecting) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
  // observer
};

const headerObserver = new IntersectionObserver(headerFunc, {
  root: null,
  threshold: 0.1,
  rootMargin: `-${headerHight}px`,
});
headerObserver.observe(headerCords);

const sectionFunc = (entries, observer) => {
  const [entry] = entries;
  // console.log(entry);
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(sectionFunc, {
  root: null,
  threshold: 0.1,
  rootMargin: "150px",
});

sections.forEach((section) => {
  sectionObserver.observe(section);
  section.classList.add("hidden");
});

// skill section
let innerFaa;
const enterFunc = (e) => {
  innerFaa = e.target.closest(".inner-fa");

  if (!innerFaa) innerFaa?.closest("inner-fa");

  if (innerFaa === null) innerFaa = e.target.querySelector(".inner-fa");

  if (!innerFaa?.classList.contains("inner-fa-hover"))
    innerFaa?.classList.add("inner-fa-hover");
  innerFaa.querySelector("p")?.classList.remove("faa-title");
};

const outFunc = (e) => {
  innerFaa?.classList.remove("inner-fa-hover");
  innerFaa.querySelector("p")?.classList.add("faa-title");
};

faa.forEach((item) => {
  item.addEventListener("mouseover", enterFunc);

  item.addEventListener("mouseout", outFunc);
});

// qualification section

const qual = document.querySelectorAll(".qual");

const qualInFunc = (e) => {
  const parent = e.target.closest(".qual");

  if (!parent.classList.contains(".row-height-big"))
    parent.classList.add("row-height-big");

  parent.querySelector(".row-height-small").classList.add("row-height-block");
  parent.closest(".row").querySelector(".v1").classList.add("v11");
};

const qualOutFunc = (e) => {
  const parent = e.target.closest(".qual");
  parent.classList.remove("row-height-big");
  parent
    .querySelector(".row-height-small")
    .classList.remove("row-height-block");

  parent.closest(".row").querySelector(".v1").classList.remove("v11");
};

qual.forEach((item) => {
  item.addEventListener("mouseover", qualInFunc);
  item.addEventListener("mouseout", qualOutFunc);
});

const now = new Date();
console.log(now);
const options = {
  hour: "numeric",
  minute: "numeric",
  day: "numeric",
  month: "short",
  year: "numeric",
  weekday: "short",
};

let locale;

select.addEventListener("change", (e) => {
  locale = e.target.value;
  localeFunc(locale);
});

if (!locale) {
  locale = navigator.language;
  time.textContent = new Intl.DateTimeFormat(locale, options).format(now);
}

localeFunc = (locale) => {
  console.log(locale);
  if (locale) {
    console.log("here");
    time.textContent = new Intl.DateTimeFormat(locale, options).format(now);
  }
};

console.log(window.screen);

// if (window.screen.width <= 769) {
//   const img = document.querySelectorAll(".img");
//   img.forEach((img) => {
//     img.remove();
//   });
// }

// media query

console.log("width", window.screen.width);
console.log("screen", window.screen);

// if (window.screen.width === 1024) {
//   const header = document.querySelector(".header");
//   const html = `<i  class="fa-solid fa-bars fa-2x menu"></i>`;

//   // html.classList;
//   // console.log(header.getAttribute);

//   header.insertAdjacentHTML("afterbegin", html);
// }
