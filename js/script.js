const navbar = document.querySelector('.header-navbar');
const headerHamburger = document.querySelector('#header-hamburger');
const headerClose = document.querySelector('.header-close');
const popupwindow = document.querySelector('#popup');
const recentWorkCardsContainer = document.querySelector(
  '.recent-work-cards-container',
);

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
    title: 'Rent Home Now',
    desc: 'Rent Home Now is a website that facilitates the connection between property owners interested in renting out their properties and potential renters. This site allows for the creation of reservations on selected properties.',
    tags: ['Ruby on rails', 'ReactJs', 'Redux Toolkit', 'API', 'TDD'],
    imgUrl: './dist/images/projects/rent_home_now.png',
    live: 'https://github.com/shahadat3669/rent-home-now',
    source: 'https://github.com/shahadat3669/rent-home-now',
  },
  {
    id: 1,
    title: 'SnapPay',
    desc: 'The SnapPay, a Microverse Ruby on Rails capstone TDD project allows you to easily track your expenses by creating a list of transactions and categorizing them. By doing so, you can effortlessly analyze your spending patterns and gain valuable insights into where your money is going. SnapPay is designed with a sleek and user-friendly interface that can be accessed from your mobile device, making it a convenient tool for anyone looking to take control of their finances.',
    tags: ['Ruby on rails', 'Mobile UI', 'Bootstrap5', 'TDD'],
    imgUrl: './dist/images/projects/snappay.png',
    live: 'https://snap-pay.onrender.com/',
    source: 'https://github.com/shahadat3669/snap-pay',
  },
  {
    id: 2,
    title: 'Metrics: Mobile Web App',
    desc: 'This React capstone project is about building a mobile web application to check a list of metrics (numeric values) that make by the use of React and Redux.',
    tags: [
      'react',
      'redux',
      'restcountries-api',
      'redux-toolkit',
      'SCSS',
      'Jest',
    ],
    imgUrl: './dist/images/projects/metrics.png',
    live: 'https://matrics.onrender.com/',
    source: 'https://github.com/shahadat3669/metrics-webapp',
  },
  {
    id: 3,
    title: 'Waregfood',
    desc: "We are a technology company first, but with a major focus on consumer well-being through a healthy diet. Most people are very busy with their jobs, family and friends, and other important activities, which doesn't leave much time for cooking. This might lead to a poor diet and lasting health consequences. We want to solve this problem by using an AI-centric approach. Users can use our app to select their diet and foods they like and dislike, and our AI algorithm will create a custom and individual weekly meal plan. But we don't stop there. We partner with restaurants and other cooking partners to actually cook and deliver all meals from the generated meal plans, in selected cities. All this will be packed up in a monthly subscription, where users can choose between receiving one or two meals per day, every single day of the month.",
    tags: ['Html', 'CSS', 'JavaScript', 'SCSS'],
    imgUrl: './dist/images/projects/waregfood.png',
    live: 'https://shahadat3669.github.io/waregfood/dist/index.html',
    source: 'https://github.com/shahadat3669/waregfood',
  },
  {
    id: 4,
    title: 'Pie World Conference',
    desc: 'This is my first capstone project in Microverse Coding School. Which is built with HTML, CSS & JavaScript. Here I learn to show the speakers dynamically by using JavaScript.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    imgUrl: './dist/images/projects/pie-world-cnference.png',
    live: 'https://shahadat3669.github.io/pie-world-conference-page',
    source: 'https://github.com/shahadat3669/pie-world-conference-page',
  },
  {
    id: 5,
    title: 'Leaderboard',
    desc: 'The leaderboard website displays scores submitted by different players. It also allows you to submit your score. All data is preserved thanks to the external Leaderboard API service.',
    tags: ['HTML', 'CSS', 'JavaScript', 'SCSS'],
    imgUrl: './dist/images/projects/leader-board.png',
    live: 'https://shahadat3669.github.io/leaderboard/dist/index.html',
    source: 'https://github.com/shahadat3669/leaderboard',
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
         ${project.tags
    .map((tag) => `<li class="card-list-item">${tag}</li>`)
    .join(' ')} 
        </ul>
        <div class="card-btn-container">
          <button class="btn btn-primary btn-project" onclick="popupW(${
  project.id
})">See Project</button>
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
        <h3 class="popup-title">${projectList[id].title}</h3>
        <div class="popup-top-action-container">
          <div class="inner">
            <a href="${
  projectList[id].live
}" target="_blank" class="popup-action-btn btn btn-primary popup-action">See Live <img src="dist/images/live.svg" class="popup-action-btn-icon" alt="" /></a>
            <a href="${
  projectList[id].source
}" target="_blank" class="popup-action-btn btn btn-primary popup-action">See Source <img src="dist/images/white-github.svg" class="popup-action-btn-icon" alt="" /></a>
          </div>
        </div>
      </div>
      <ul class="card-list-items popup-tags">
      ${projectList[id].tags
    .map((tag) => `<li class="card-list-item">${tag}</li>`)
    .join(' ')} 
      </ul>
    </div>
    <div class="popup-left-block">
      <p>${projectList[id].desc}</p>
    </div>
    <div class="popup-action-container">
      <a href="${
  projectList[id].live
}" target="_blank" class="popup-action-btn btn btn-primary popup-action">See Live <img src="dist/images/live.svg" class="popup-action-btn-icon" alt="" /></a>
      <a href="${
  projectList[id].source
}" target="_blank" class="popup-action-btn btn btn-primary popup-action">See Source <img src="dist/images/white-github.svg" class="popup-action-btn-icon" alt="" /></a>
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

// sava data to localStorage
const formObject = {
  name: '',
  email: '',
  message: '',
};
form.name.addEventListener('change', () => {
  formObject[form.name.name] = form.name.value;
  localStorage.setItem('formData', JSON.stringify(formObject));
});
form.email.addEventListener('change', () => {
  formObject[form.email.name] = form.email.value;
  localStorage.setItem('formData', JSON.stringify(formObject));
});

form.message.addEventListener('change', () => {
  formObject[form.message.name] = form.message.value;
  localStorage.setItem('formData', JSON.stringify(formObject));
});

if (JSON.parse(localStorage.getItem('formData')) === null) {
  formObject.name = '';
  formObject.email = '';
  formObject.message = '';
} else {
  const data = JSON.parse(localStorage.getItem('formData'));
  formObject.name = data.name;
  formObject.email = data.email;
  formObject.message = data.message;
}

form.name.value = formObject.name;
form.email.value = formObject.email;
form.message.value = formObject.message;
