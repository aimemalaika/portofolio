const navigation = document.querySelector('.navigation');
const header = document.querySelector('.toolbar');
const navItemsDesktop = document.querySelectorAll('.nav-item-desktop');
const navItemsMobile = document.querySelectorAll('.nav-item-mobile');
const expandMenu = () => {
  navigation.classList.remove('animate-left');
  navigation.classList.add('animate-right');
};

const closeMenu = () => {
  navigation.classList.remove('animate-right');
  navigation.classList.add('animate-left');
};

const setActive = (nav, target = null) => {
  nav.forEach((element) => {
    if (element.getAttribute('href') === target) {
      element.classList.add('active');
    } else {
      element.classList.remove('active');
    }
  });
};

document.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    if (!header.classList.contains('sticky')) {
      header.classList.add('sticky');
    }
  } else {
    header.classList.remove('sticky');
  }
  switch (true) {
    case window.scrollY >= 879.75 && window.scrollY < 2406.75:
      setActive(navItemsDesktop, '#portofolio');
      break;
    case window.scrollY >= 2406.75 && window.scrollY < 3257.5:
      setActive(navItemsDesktop, '#about');
      break;
    case window.scrollY >= 3257.5:
      setActive(navItemsDesktop, '#contact-form');
      break;
    default:
      setActive(navItemsDesktop);
      break;
  }
  switch (true) {
    case window.scrollY >= 1017.5 && window.scrollY < 4856.75:
      setActive(navItemsMobile, '#portofolio');
      break;
    case window.scrollY >= 4856.75 && window.scrollY < 6780.5:
      setActive(navItemsMobile, '#about');
      break;
    case window.scrollY >= 6780.5:
      setActive(navItemsMobile, '#contact');
      break;
    default:
      setActive(navItemsMobile);
      break;
  }
});

document.querySelector('.open').addEventListener('click', expandMenu);
const closeClass = document.querySelectorAll('.close');
closeClass.forEach(((element) => element.addEventListener('click', closeMenu)));

const projects = [
  {
    name: 'Batman',
    languages: ['Html', 'Css', 'JavaScript'],
    image: 'snapshootportfolio.png',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident doloribus odio sunt, quaerat unde nostrum numquam soluta nam eos voluptas est quas aperiam enim asperiores, exercitationem accusantium quasi saepe deleniti.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id perspiciatis corrupti, in blanditiis dignissimos soluta impedit illo ea. Ea ducimus pariatur dolorum earum distinctio eum possimus esse obcaecati, doloribus architecto.',
    livelink: 'https://aimemalaika.github.io/portofolio',
    repository: 'https://github.com/aimemalaika/portofolio',
  },
  {
    name: 'Bender Project',
    languages: ['Html', 'Css', 'JavaScript'],
    image: 'project.png',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident doloribus odio sunt, quaerat unde nostrum numquam soluta nam eos voluptas est quas aperiam enim asperiores, exercitationem accusantium quasi saepe deleniti.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id perspiciatis corrupti, in blanditiis dignissimos soluta impedit illo ea. Ea ducimus pariatur dolorum earum distinctio eum possimus esse obcaecati, doloribus architecto.',
    livelink: 'https://aimemalaika.github.io/portofolio',
    repository: 'https://github.com/aimemalaika/portofolio',
  },
  {
    name: 'Matadors',
    languages: ['Html', 'Css', 'JavaScript'],
    image: 'snapshootportfolio.png',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident doloribus odio sunt, quaerat unde nostrum numquam soluta nam eos voluptas est quas aperiam enim asperiores, exercitationem accusantium quasi saepe deleniti. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id perspiciatis corrupti, in blanditiis dignissimos soluta impedit illo ea. Ea ducimus pariatur dolorum earum distinctio eum possimus esse obcaecati, doloribus architecto.',
    livelink: 'https://aimemalaika.github.io/portofolio',
    repository: 'https://github.com/aimemalaika/portofolio',
  },
  {
    name: 'Husky Cat',
    languages: ['Html', 'Css', 'JavaScript'],
    image: 'project.png',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident doloribus odio sunt, quaerat unde nostrum numquam soluta nam eos voluptas est quas aperiam enim asperiores, exercitationem accusantium quasi saepe deleniti.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id perspiciatis corrupti, in blanditiis dignissimos soluta impedit illo ea. Ea ducimus pariatur dolorum earum distinctio eum possimus esse obcaecati, doloribus architecto.',
    livelink: 'https://aimemalaika.github.io/portofolio',
    repository: 'https://github.com/aimemalaika/portofolio',
  },
  {
    name: 'Hornets',
    languages: ['Html', 'Css', 'JavaScript'],
    image: 'project.png',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident doloribus odio sunt, quaerat unde nostrum numquam soluta nam eos voluptas est quas aperiam enim asperiores, exercitationem accusantium quasi saepe deleniti.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id perspiciatis corrupti, in blanditiis dignissimos soluta impedit illo ea. Ea ducimus pariatur dolorum earum distinctio eum possimus esse obcaecati, doloribus architecto.',
    livelink: 'https://aimemalaika.github.io/portofolio',
    repository: 'https://github.com/aimemalaika/portofolio',
  },
  {
    name: 'Canary',
    languages: ['Html', 'Css', 'JavaScript'],
    image: 'snapshootportfolio.png',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident doloribus odio sunt, quaerat unde nostrum numquam soluta nam eos voluptas est quas aperiam enim asperiores, exercitationem accusantium quasi saepe deleniti.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id perspiciatis corrupti, in blanditiis dignissimos soluta impedit illo ea. Ea ducimus pariatur dolorum earum distinctio eum possimus esse obcaecati, doloribus architecto.',
    livelink: 'https://aimemalaika.github.io/portofolio',
    repository: 'https://github.com/aimemalaika/portofolio',
  },
  {
    name: 'Bigfish',
    languages: ['Html', 'Css', 'JavaScript', 'Rubby'],
    image: 'project.png',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident doloribus odio sunt, quaerat unde nostrum numquam soluta nam eos voluptas est quas aperiam enim asperiores, exercitationem accusantium quasi saepe deleniti.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id perspiciatis corrupti, in blanditiis dignissimos soluta impedit illo ea. Ea ducimus pariatur dolorum earum distinctio eum possimus esse obcaecati, doloribus architecto.',
    livelink: 'https://aimemalaika.github.io/portofolio',
    repository: 'https://github.com/aimemalaika/portofolio',
  },
  {
    name: 'Cascade',
    languages: ['Html', 'Css', 'JavaScript'],
    image: 'snapshootportfolio.png',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident doloribus odio sunt, quaerat unde nostrum numquam soluta nam eos voluptas est quas aperiam enim asperiores, exercitationem accusantium quasi saepe deleniti.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id perspiciatis corrupti, in blanditiis dignissimos soluta impedit illo ea. Ea ducimus pariatur dolorum earum distinctio eum possimus esse obcaecati, doloribus architecto.',
    livelink: 'https://aimemalaika.github.io/portofolio',
    repository: 'https://github.com/aimemalaika/portofolio',
  },
  {
    name: 'Casanova',
    languages: ['Html', 'Css', 'JavaScript'],
    image: 'project.png',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident doloribus odio sunt, quaerat unde nostrum numquam soluta nam eos voluptas est quas aperiam enim asperiores, exercitationem accusantium quasi saepe deleniti.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id perspiciatis corrupti, in blanditiis dignissimos soluta impedit illo ea. Ea ducimus pariatur dolorum earum distinctio eum possimus esse obcaecati, doloribus architecto.',
    livelink: 'https://aimemalaika.github.io/portofolio',
    repository: 'https://github.com/aimemalaika/portofolio',
  },
  {
    name: 'Horned Frogs',
    languages: ['Html', 'Css', 'JavaScript'],
    image: 'project.png',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident doloribus odio sunt, quaerat unde nostrum numquam soluta nam eos voluptas est quas aperiam enim asperiores, exercitationem accusantium quasi saepe deleniti.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id perspiciatis corrupti, in blanditiis dignissimos soluta impedit illo ea. Ea ducimus pariatur dolorum earum distinctio eum possimus esse obcaecati, doloribus architecto.',
    livelink: 'https://aimemalaika.github.io/portofolio',
    repository: 'https://github.com/aimemalaika/portofolio',
  },
  {
    name: 'Massive Monkey',
    languages: ['Html', 'Css', 'JavaScript'],
    image: 'project.png',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident doloribus odio sunt, quaerat unde nostrum numquam soluta nam eos voluptas est quas aperiam enim asperiores, exercitationem accusantium quasi saepe deleniti.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id perspiciatis corrupti, in blanditiis dignissimos soluta impedit illo ea. Ea ducimus pariatur dolorum earum distinctio eum possimus esse obcaecati, doloribus architecto.',
    livelink: 'https://aimemalaika.github.io/portofolio',
    repository: 'https://github.com/aimemalaika/portofolio',
  },
  {
    name: 'The Bomb Squad',
    languages: ['Html', 'Css', 'JavaScript'],
    image: 'snapshootportfolio.png',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident doloribus odio sunt, quaerat unde nostrum numquam soluta nam eos voluptas est quas aperiam enim asperiores, exercitationem accusantium quasi saepe deleniti.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id perspiciatis corrupti, in blanditiis dignissimos soluta impedit illo ea. Ea ducimus pariatur dolorum earum distinctio eum possimus esse obcaecati, doloribus architecto.',
    livelink: 'https://aimemalaika.github.io/portofolio',
    repository: 'https://github.com/aimemalaika/portofolio',
  },
];

(() => {
  projects.forEach((project, index) => {
    let language = '';
    project.languages.forEach((lang) => {
      language += `<li>${lang}</li>`;
    });
    document.querySelector('#achievementlist').innerHTML += `
    <li class="card">
      <div class="project-image-card">
        <img class="projectimages" src="assets/images/${project.image}" alt="${project.name}" />
      </div>
      <div class="project-description">
        <h3>${project.name}</h3>
        <ul class="languages">${language}</ul>
        <div class="project-button-wrapper">
          <button type="button" data-index="${index}" class="success-button opne-modal">See Project</button>
        </div>
      </div>
    </li>
    `;
  });
})();

const openPopup = (element) => {
  document.querySelector('#modal-title').textContent = projects[element.getAttribute('data-index')].name;
  document.querySelector('#project-banner').setAttribute('src', `assets/images/${projects[element.getAttribute('data-index')].image}`);

  let language = '';
  projects[element.getAttribute('data-index')].languages.forEach((lang) => {
    language += `<li>${lang}</li>`;
  });

  document.querySelector('#laguages-modal').innerHTML = language;

  document.querySelectorAll('.livelink').forEach((alink) => alink.setAttribute('href', projects[element.getAttribute('data-index')].livelink));
  document.querySelectorAll('.repolink').forEach((alink) => alink.setAttribute('href', projects[element.getAttribute('data-index')].repository));

  document.querySelector('#descriptionmodal').textContent = projects[element.getAttribute('data-index')].description;

  document.querySelector('#project-modal').style.display = 'block';
  setTimeout(() => {
    document.querySelector('.modal').classList.remove('project-modal-up');
    document.querySelector('.modal').classList.add('project-modal-down');
  }, 500);
};

document.querySelector('#modal-close').addEventListener('click', () => {
  document.querySelector('.modal').classList.remove('project-modal-down');
  document.querySelector('.modal').classList.add('project-modal-up');
  setTimeout(() => {
    document.querySelector('#project-modal').style.display = 'none';
  }, 600);
});

document.querySelectorAll('.opne-modal').forEach((element) => {
  element.addEventListener('click', () => openPopup(element));
});

const validateForm = (formItem) => {
  let isInvalid = 0;
  const regex = /\S+@\S+\.\S+/;
  switch (true) {
    case formItem.getAttribute('type') === 'email':
      if (!regex.test(formItem.value)) {
        formItem.nextElementSibling.innerHTML += 'The email is invalid <br>';
        isInvalid += 1;
      } else {
        formItem.nextElementSibling.textContent.replace('The email is invalid <br>, ', '');
      }
      if (formItem.value !== formItem.value.toLowerCase()) {
        formItem.nextElementSibling.innerHTML += 'The email shoud be in lowercase';
        isInvalid += 1;
      } else {
        formItem.nextElementSibling.textContent.replace('The email shoud be in lowercase', '');
      }
      break;
    case formItem.getAttribute('type') === 'text':
      if (formItem.value.length > formItem.getAttribute('maxlength')) {
        formItem.nextElementSibling.innerHTML += `The maximum number of character is ${formItem.getAttribute('maxlength')} <br>`;
        isInvalid += 1;
      } else {
        formItem.nextElementSibling.textContent.replace(`The maximum number of character is ${formItem.getAttribute('maxlength')} <br>`, '');
      }
      if (formItem.value.length < formItem.getAttribute('minlength')) {
        formItem.nextElementSibling.innerHTML += `The minimum number of character is ${formItem.getAttribute('minlength')}`;
        isInvalid += 1;
      } else {
        formItem.nextElementSibling.textContent.replace(`The minimum number of character is ${formItem.getAttribute('maxlength')}`, '');
      }
      break;
    default:
      break;
  }
  if (isInvalid > 0) {
    formItem.nextElementSibling.style.display = 'block';
  }

  return isInvalid;
};

document.querySelector('#contact-form').addEventListener('submit', (e) => {
  let invalid = 0;
  for (let i = 0; i < e.target.length; i += 1) {
    if (!e.target[i].hasAttribute('disabled')) {
      if (e.target[i].classList.contains('form-control')) {
        if (e.target[i].value === '') {
          invalid += 1;
          e.target[i].nextElementSibling.innerHTML = `Pease enter your ${e.target[i].getAttribute('placeholder')}<br>`;
          e.target[i].nextElementSibling.style.display = 'block';
        } else {
          e.target[i].nextElementSibling.textContent = '';
        }
      }
      invalid += validateForm(e.target[i]);
    }
  }
  if (invalid > 0) {
    e.preventDefault();
  }
});

document.querySelectorAll('.form-control').forEach((element) => element.addEventListener('focus', () => {
  element.nextElementSibling.style.display = 'none';
}));

window.addEventListener('resize', () => {
  if (window.screen.width < 992) {
    document.querySelector('[name="firstname"]').disabled = true;
    document.querySelector('[name="lastname"]').disabled = true;
    document.querySelector('[name="fullname"]').disabled = false;
  } else {
    document.querySelector('[name="firstname"]').disabled = false;
    document.querySelector('[name="lastname"]').disabled = false;
    document.querySelector('[name="fullname"]').disabled = true;
  }
});