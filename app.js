// defining a dom shortcut function.
function dcl(t = 'div') {
  if (!t) {
    t = 'div';
  }
  return document.createElement(t);
}

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
    id: 'project1',
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
    id: 'project2',
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
    workDetails.appendChild(atnBrn);

    card.appendChild(workDetails);
    portfolio.appendChild(card);
  });
}

window.onload = () => {
  fetchAllProject();
};