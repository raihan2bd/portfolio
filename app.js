// defining a dom shortcut function.
function dcl(t = 'div') {
  if (!t) {
    t = 'div';
  }
  return document.createElement(t);
}

// This block for Type writer effect on headline section
const heading = ' I am Abu Raihan , <br/> Glad to see you!';
const hArr = heading.split(' ');
let typeCount = 1;
function typeWriter() {
  if (typeCount < hArr.length) {
    document.querySelector('.type-animation').innerHTML += ` ${hArr[typeCount]}`;
    typeCount += 1;
    setTimeout(typeWriter, 200);
  }
}

typeWriter();

// this peace of code is responsible for scroll spy
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav_item_action');
window.onscroll = () => {
  sections.forEach((section) => {
    const top = window.scrollY;
    const offset = section.offsetTop - 200;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');
    if (top >= offset && top < height + offset) {
      navLinks.forEach((link) => {
        link.classList.remove('active');
        document.querySelectorAll(`a[href*=${id}]`).forEach((item) => item.classList.add('active'));
      });
    }
  });
};

// Navigation Menu
const mobileMenu = document.querySelector('.header_menu');
const navItems = document.querySelector('.mobile_nav_items');
const selectNavItems = document.querySelectorAll('#m_nav');
const crossIcon = document.querySelector('.toggle-cross');
let setMobileNav = false;

function toggleNav() {
  if (setMobileNav) {
    navItems.classList.remove('df');
    setMobileNav = false;
  } else {
    navItems.classList.add('df');
    setMobileNav = true;
  }
}

mobileMenu.addEventListener('click', toggleNav);
crossIcon.addEventListener('click', toggleNav);
selectNavItems.forEach((item) => {
  item.addEventListener('click', toggleNav);
});

// Project Section
// project data
const projectData = [
  {
    id: 'project1',
    title: 'Tonic',
    frame: ['CANOPY', 'Back End Dev', 2015],
    primaryText: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    tags: ['HTML', 'CSS', 'Javascript'],
    imageUrl: './images/portfolio-1.png',
    projectDetails: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    liveLink: '#',
    sourceLink: '#',
  },
  {
    id: 'project2',
    title: 'Multi-Post Stories',
    frame: ['FACEBOOK', 'FULL STACK DEV', 2015],
    primaryText: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    tags: ['HTML', 'CSS', 'Javascript'],
    imageUrl: './images/portfolio-2.png',
    projectDetails: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    liveLink: '#',
    sourceLink: '#',
  },
  {
    id: 'project3',
    title: 'Tonic',
    frame: ['CANOPY', 'Back End Dev', 2015],
    primaryText: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    tags: ['HTML', 'CSS', 'Javascript'],
    imageUrl: './images/portfolio-3.png',
    projectDetails: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    liveLink: '#',
    sourceLink: '#',
  },
  {
    id: 'project4',
    title: 'Multi-Post Stories',
    frame: ['FACEBOOK', 'FULL STACK DEV', 2015],
    primaryText: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    tags: ['HTML', 'CSS', 'Javascript'],
    imageUrl: './images/portfolio-4.png',
    projectDetails: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    liveLink: '#',
    sourceLink: '#',
  },
]; // End of portfolio data

// Fetch single project from projectData
function fetchOnePoject(id) {
  const projects = projectData;

  let project;
  for (let i = 0; i < projectData.length; i += 1) {
    if (projects[i].id === id) {
      project = projects[i];
    }
  }

  if (project) {
    const article = dcl('article');
    article.classList.add('popup_article');
    article.setAttribute('id', project.id);

    const articleModal = dcl();
    articleModal.classList.add('article-modal');
    // Article title
    const workTitle = dcl('h2');
    workTitle.classList.add('work_title');
    workTitle.innerText = project.title;

    // cross-icon
    const crossIcon = dcl('span');
    crossIcon.setAttribute('id', 'article-close');
    crossIcon.innerHTML = '<img src="./images/cross-icon.png" alt="X"/>';

    // work_info
    const workInfo = dcl('ul');
    workInfo.classList.add('work_info');

    // work_info_item
    project.frame.forEach((f) => {
      const workInfoItem = dcl('li');
      workInfoItem.classList.add('w_info_item');
      workInfoItem.innerText = f;
      workInfo.appendChild(workInfoItem);
    });

    // image
    const articleImage = dcl();
    articleImage.classList.add('article-image');
    articleImage.innerHTML = `<img class='article-img' src='${project.imageUrl}' alt='${project.title}'/>`;

    // project block
    const projectBlock = dcl();
    projectBlock.classList.add('article-block');

    // left block
    const leftBlock = dcl();
    leftBlock.classList.add('left-block');
    // article_details_content
    const workDetailsContent = dcl('p');
    workDetailsContent.classList.add('work_details_content');
    workDetailsContent.innerText = project.projectDetails;
    leftBlock.append(workDetailsContent);

    // right block
    const rightBlock = dcl();
    rightBlock.classList.add('right-block');

    // work_cat
    const workCat = dcl('ul');
    workCat.classList.add('work_cats');
    project.tags.forEach((tag) => {
      const catLi = dcl('li');
      catLi.innerText = tag;
      workCat.appendChild(catLi);
    });

    // actions
    const actions = dcl();
    actions.classList.add('actions');

    // live link
    const liveLink = dcl('a');
    liveLink.classList.add('article-btn');
    liveLink.setAttribute('href', project.liveLink);
    liveLink.innerHTML = 'See Live <span class="btn-icon"><img src="./images/btn-live.png" alt= "Live"/></span>';

    // source link
    const sourceLink = dcl('a');
    sourceLink.classList.add('article-btn');
    sourceLink.setAttribute('href', project.sourceLink);
    sourceLink.innerHTML = 'See Live <span class="btn-icon"><img src="./images/btn-github.png" alt= "Live"/></span>';

    // appending link
    actions.append(liveLink, sourceLink);

    // appending rightBlock
    rightBlock.append(workCat, actions);

    // appending projectBlock
    projectBlock.append(leftBlock, rightBlock);

    // appending article-modal
    articleModal.append(crossIcon, workTitle, workInfo, articleImage, projectBlock);

    // appending article-modal to article
    article.append(articleModal);
    // end of if condition
    document.querySelector('main').append(article);

    // add event
    const closeModal = document.getElementById('article-close');
    closeModal.addEventListener('click', () => {
      document.querySelector('main').removeChild(article);
    });
  }
}

// this fetchAllProject function will add data in portfolio section dinamically
function fetchAllProject() {
  // select the portfolio
  const portfolio = document.getElementById('portfolio');
  projectData.forEach((project) => {
    // Dom element for card
    const card = dcl();
    card.classList.add('work_card');

    const workPreview = dcl();
    workPreview.classList.add('work_preview');
    workPreview.innerHTML = `<img class='project-img' src='${project.imageUrl}' alt='${project.title}'/>`;
    card.appendChild(workPreview);

    // work_details
    const workDetails = dcl();
    workDetails.classList.add('work_details');

    // work title
    const workTitle = dcl('h2');
    workTitle.classList.add('work_title');
    workTitle.innerText = project.title;
    workDetails.appendChild(workTitle);

    // work_info
    const workInfo = dcl('ul');
    workInfo.classList.add('work_info');

    // work_info_item
    project.frame.forEach((f) => {
      const workInfoItem = dcl('li');
      workInfoItem.classList.add('w_info_item');
      workInfoItem.innerText = f;
      workInfo.appendChild(workInfoItem);
    });
    workDetails.appendChild(workInfo);

    // work_details_content
    const workDetailsContent = dcl('p');
    workDetailsContent.classList.add('work_details_content');
    workDetailsContent.innerText = project.primaryText;
    workDetails.appendChild(workDetailsContent);

    // work_cat
    const workCat = dcl('ul');
    workCat.classList.add('work_cats');
    project.tags.forEach((tag) => {
      const catLi = dcl('li');
      catLi.innerText = tag;
      workCat.appendChild(catLi);
    });
    workDetails.appendChild(workCat);
    // action button
    const atnBrn = dcl('button');
    atnBrn.classList.add('atn_btn');
    atnBrn.innerText = 'See More';
    atnBrn.setAttribute('id', project.id);
    atnBrn.addEventListener('click', () => {
      fetchOnePoject(project.id);
    });
    workDetails.appendChild(atnBrn);

    card.appendChild(workDetails);
    portfolio.appendChild(card);
  });
}

// selecting input elements
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

// Store formData in localStorage
function loadLocalStorage() {
  const formData = JSON.parse(window.localStorage.getItem('formData'));
  if (formData) {
    nameInput.value = formData.name;
    emailInput.value = formData.email;
    messageInput.value = formData.message;
  }
}

// OnChange function will store form data in localStorage
function onChange(e) {
  let formData = JSON.parse(localStorage.getItem('formData'));
  if (!formData) {
    formData = {};
  }
  // saving form data on localStorage
  const m = e.target.name;
  formData[m] = e.target.value;
  formData = JSON.stringify(formData);
  window.localStorage.setItem('formData', formData);
}

// Fire event on form input
nameInput.addEventListener('change', onChange);
emailInput.addEventListener('change', onChange);
messageInput.addEventListener('change', onChange);

// Load Data in dom on the fly
window.onload = () => {
  fetchAllProject();
  loadLocalStorage();
};

// Form Validation
function onSubmit(e) {
  const inputEmail = document.getElementById('email');
  const formInfo = document.getElementById('form-info');
  const email = inputEmail.value;

  // Check if email value is lowercase or not
  if (email !== email.toLowerCase()) {
    e.preventDefault();
    inputEmail.classList.add('invalid');
    formInfo.classList.add('error');
    formInfo.innerText = 'Error form is not sent! The Email should be in lower case!!';
  } else {
    inputEmail.classList.remove('invalid');
    formInfo.classList.remove('error');
  }
}
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', onSubmit);

// Remove Error onchange from the form.
const inputEmail = document.getElementById('email');
const formInfo = document.getElementById('form-info');
inputEmail.addEventListener('change', () => {
  inputEmail.classList.remove('invalid');
  formInfo.classList.remove('error');
  formInfo.innerText = '';
});
