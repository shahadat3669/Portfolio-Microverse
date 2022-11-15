const navbar = document.querySelector('.header-navbar');
const headerHamburger = document.querySelector('.header-hamburger');
const headerClose = document.querySelector('.header-close');

function menuToggler() {
  const navbar = document.querySelector('.header-navbar');
  navbar.style.display = 'flex';
}

function menucloseToggler() {
  navbar.style.display = 'none';
}

headerHamburger.addEventListener('click', menuToggler);
headerClose.addEventListener('click', menucloseToggler);
