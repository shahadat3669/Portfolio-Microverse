const navbar = document.querySelector('.header-navbar');
const headerHamburger = document.querySelector('#header-hamburger');
const headerClose = document.querySelector('.header-close');
const popupwindow = document.querySelector('#popup');
const closebt = document.querySelector('.popup-cancel');
const seetp = document.querySelectorAll('.btn-project');

function menuToggler() {
  const navbar = document.querySelector('.header-navbar');
  navbar.style.display = 'flex';
}

function menucloseToggler() {
  navbar.style.display = 'none';
}

function popupWC() {
  popupwindow.style.display = 'none';
}
function popupW() {
  popupwindow.style.display = 'flex';
}

headerHamburger.addEventListener('click', menuToggler);
headerClose.addEventListener('click', menucloseToggler);
closebt.addEventListener('click', popupWC);
seetp.forEach(box => {
  box.addEventListener('click', popupW)
})
