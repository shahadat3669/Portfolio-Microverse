const navbar = document.querySelector('.header-navbar');
const headerHamburger = document.querySelector('#header-hamburger');
const headerClose = document.querySelector('.header-close');
const popupwindow = document.querySelector('#popup');
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

function popupW(id) {
  const popupHtmlGenerator = `
  <div class="popup-wrapper">
  <div class="popup-inner">
    <div class="img-container">
      <button class="btn popup-cancel" onclick="popupWC()">
          <img src="./dist/images/popup-cancle.svg" alt="icon cancel" class="popup-cancle-icon" />
      </button>
      <div class="popup-img-box"> 
      <img src="${projectList[id].imgUrl}" alt="${projectList[id].title}" />
      </div>

    </div>
    <div class="popup-primary-text">
      <div class="popup-title-container">
        <h3 class="popup-title">Keeping track of hundreds of components</h3>
        <div class="popup-top-action-container">
          <div class="inner">
            <a href="${projectList[id].live}" target="_blank" class="popup-action-btn btn btn-primary popup-action">See Live <img src="dist/images/live.svg" class="popup-action-btn-icon" alt="" /></a>
            <a href="${projectList[id].source}" target="_blank" class="popup-action-btn btn btn-primary popup-action">See Source <img src="dist/images/white-github.svg" class="popup-action-btn-icon" alt="" /></a>
          </div>
        </div>
      </div>
      <ul class="card-list-items popup-tags">
      ${projectList[id].tags.map((tag) => `<li class="card-list-item">${tag}</li>`).join(' ')} 
      </ul>
    </div>
    <div class="popup-left-block">
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea</p>
    </div>
    <div class="popup-action-container">
      <a href="${projectList[id].live}" target="_blank" class="popup-action-btn btn btn-primary popup-action">See Live <img src="dist/images/live.svg" class="popup-action-btn-icon" alt="" /></a>
      <a href="${projectList[id].source}" target="_blank" class="popup-action-btn btn btn-primary popup-action">See Source <img src="dist/images/white-github.svg" class="popup-action-btn-icon" alt="" /></a>
    </div>
  </div>
</div>
`;

  popupwindow.innerHTML = popupHtmlGenerator;

  popupwindow.style.display = 'flex';
}

const x = 0;
if (x === 1) {
  popupWC();
  popupW();
}

headerHamburger.addEventListener('click', menuToggler);
headerClose.addEventListener('click', menucloseToggler);

function showMessage(input, message, type) {
  const msg = document.querySelector('small');
  msg.innerText = message;
  input.className = type ? 'success' : 'error';
  return type;
}

function showError(input, message) {
  return showMessage(input, message, false);
}

function validateEmail(input, invalidMsg) {
  // validate email format
  const emailRegex = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
  const email = input.value.trim();
  if (!emailRegex.test(email)) {
    return showError(input, invalidMsg);
  }
  return true;
}
const form = document.querySelector('#formC');
const EMAIL_INVALID = 'Email should be in lowercase';

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const emailValid = validateEmail(form.elements.email, EMAIL_INVALID);
  if (emailValid) {
    form.submit();
  }
});
