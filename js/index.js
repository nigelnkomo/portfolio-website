// Navbar Toggle Function
const toggle = document.querySelector('.navbar__toggle');
const menu = document.querySelector('.navbar__menu');

if (toggle) {
  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    menu.classList.toggle('active');
  });
} else {
  console.log("Navbar toggle element not found.");
}
