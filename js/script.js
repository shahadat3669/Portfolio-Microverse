const navbar = document.querySelector('.header-navbar');
const headerHamburger = document.querySelector('#header-hamburger');
const headerClose = document.querySelector('.header-close');
const popupwindow = document.querySelector('#popup');
const closebt = document.querySelector('.popup-cancel');
const projectBtn = document.querySelector('.btn-project');
const recentWorkCardsContainer = document.querySelector('.recent-work-cards-container');

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

const projectList = [
  {
    id: 0,
    title: 'Multi-Post Stories Gain+Glory',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    tags: ['Ruby on rails', 'css', 'JavScript', 'html'],
    imgUrl: './dist/images/placeholder.png',
    live: 'https://shahadat3669.github.io/Portfolio-Microverse/',
    source: 'https://github.com/shahadat3669/Portfolio-Microverse',
  },
  {
    id: 1,
    title: 'Multi-Post Stories Gain+Glory',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    tags: ['Ruby on rails', 'css', 'JavScript', 'html'],
    imgUrl: './dist/images/placeholder.png',
    live: 'https://shahadat3669.github.io/Portfolio-Microverse/',
    source: 'https://github.com/shahadat3669/Portfolio-Microverse',
  },
  {
    id: 2,
    title: 'Multi-Post Stories Gain+Glory',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    tags: ['Ruby on rails', 'css', 'JavScript', 'html'],
    imgUrl: './dist/images/placeholder.png',
    live: 'https://shahadat3669.github.io/Portfolio-Microverse/',
    source: 'https://github.com/shahadat3669/Portfolio-Microverse',
  },
  {
    id: 3,
    title: 'Multi-Post Stories Gain+Glory',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    tags: ['Ruby on rails', 'css', 'JavScript', 'html'],
    imgUrl: './dist/images/placeholder.png',
    live: 'https://shahadat3669.github.io/Portfolio-Microverse/',
    source: 'https://github.com/shahadat3669/Portfolio-Microverse',
  },
  {
    id: 4,
    title: 'Multi-Post Stories Gain+Glory',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    tags: ['Ruby on rails', 'css', 'JavScript', 'html'],
    imgUrl: './dist/images/placeholder.png',
    live: 'https://shahadat3669.github.io/Portfolio-Microverse/',
    source: 'https://github.com/shahadat3669/Portfolio-Microverse',
  },
  {
    id: 5,
    title: 'Multi-Post Stories Gain+Glory',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    tags: ['Ruby on rails', 'css', 'JavScript', 'html'],
    imgUrl: './dist/images/placeholder.png',
    live: 'https://shahadat3669.github.io/Portfolio-Microverse/',
    source: 'https://github.com/shahadat3669/Portfolio-Microverse',
  },
];

let cardsHtmlGenerator = '';

projectList.forEach((project) => {
  cardsHtmlGenerator += `
  <!-- recent work card ${project.id} -->
    <div class="card">
      <div class="card-image-container">
        <img src="${project.imgUrl}" alt="${project.title}" />
      </div>
      <div class="card-content">
        <h3 class="card-title">${project.title}</h3>
        <ul class="card-list-items"> 
         ${project.tags.map((tag) => `<li class="card-list-item">${tag}</li>`).join(' ')} 
        </ul>
        <div class="card-btn-container">
          <button class="btn btn-primary btn-project" onclick="popupW(${project.id})">See Project</button>
        </div>
      </div>
  </div>
  `;
});

recentWorkCardsContainer.innerHTML = cardsHtmlGenerator;

headerHamburger.addEventListener('click', menuToggler);
headerClose.addEventListener('click', menucloseToggler);
closebt.addEventListener('click', popupWC);
projectBtn.addEventListener('click', popupW);
