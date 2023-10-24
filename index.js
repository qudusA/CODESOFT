const headerContainer = document.querySelector(".tab");

// sticky
const headerCords = document.querySelector(".about-section");

const header = document.querySelector(".header");
const coords = headerCords.getBoundingClientRect();

// lazy loading
const sections = document.querySelectorAll(".section");

// time in footer
const time = document.querySelector(".time");

// select class
const select = document.querySelector(".select");

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

  document.querySelector(att).scrollIntoView({ behavior: "smooth" });

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
  // console.log(entry);
  if (!entry.isIntersecting) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
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

const locale = navigator.language;
console.log(locale);

time.textContent = new Intl.DateTimeFormat(locale, options).format(now);

let tim;

select.addEventListener("change", (e) => {
  console.log(e.target.value);
  const french = "fr-FR";
  const english = "en-GB";
  const arabic = "ar-SA";
  const locale =
    e.target.value === "english"
      ? english
      : e.target.value === "french"
      ? french
      : e.target.value === "arabic"
      ? arabic
      : "";

  console.log(time.textContent);
  tim = new Intl.DateTimeFormat("en.GB", options).format(now);
});

// time.textContent = tim;
