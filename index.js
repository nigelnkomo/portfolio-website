const toggle = document.querySelector('.navbar__toggle');
const menu = document.querySelector('.navbar__menu');

toggle.addEventListener('click', () => {
  toggle.classList.toggle('active');
  menu.classList.toggle('active');
});
