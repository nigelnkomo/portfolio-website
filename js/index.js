// Navbar Toggle Function
const toggle = document.querySelector('.navbar__toggle');
const menu = document.querySelector('.navbar__menu');

if (toggle) {
  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    menu.classList.toggle('active');

    // Prevent scrolling when navbar is open
    if (menu.classList.contains("active")) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  });
} else {
  console.log("Navbar toggle element not found.");
}

const links = document.querySelectorAll(".navbar__menu a"); // Select all links inside the menu

links.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("active");
    toggle.classList.remove("active");
    document.body.style.overflow = "auto"; // Restore scrolling when link is clicked
  });
});


// Marquee
function Marquee(selector, speed) {
  const parent = document.querySelector(selector);
  const clone = parent.innerHTML;
  let i = 0;
  parent.innerHTML += clone;

  setInterval(() => {
    i += speed;
    if (i >= parent.children[0].clientWidth) i = 0;
    parent.children[0].style.marginLeft = `-${i}px`;
  }, 0);
}

window.addEventListener('load', () => Marquee('.hero__marquee', .5));

// HERO COLOURING
let heroTitles = document.querySelectorAll(".hero__title");
let heroFeels = document.querySelector(".hero__subtitle__feels")

heroTitles.forEach((title) => {
  let spans = title.innerText
    .split("")
    .map((letter, i) => {
      return `<span style="transition-delay: ${i * 40}ms; filter:hue-rotate(${
        i * 3
      }deg)">${letter}</span>`;
    })
    .join("");

  title.innerHTML = spans;
});

let spansFeels = heroFeels.innerText
    .split("")
    .map((letter, i) => {
      return `<span style="transition-delay: ${i * 40}ms; filter:hue-rotate(${
        i * 30
      }deg)">${letter}</span>`;
    })
    .join("");

  heroFeels.innerHTML = spansFeels;