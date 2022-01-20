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
    name: 'My Diary',
    languages: ['Html', 'Css', 'JavaScript'],
    image: 'diary.png',
    description: 'Image of my diary Image of my diary Image of my diary Image of my diary More images My diary My diary is a free online diary with lock. You can use it to record daily journal, secret thoughts, journey, mood, and any private moments.',
    livelink: 'https://aimemalaika.github.io/Andela_Cycle_12_Chalenge_One/UI/index.html',
    repository: 'https://github.com/aimemalaika/Andela_Cycle_12_Chalenge_One',
  },
  {
    name: 'SmartBookings',
    languages: ['Html', 'Css', 'JavaScript', 'Bootstrap', 'PHP', 'MySql'],
    image: 'accomodation.png',
    description: 'Founded in 2018 in Rwanda, SmartBookings.rw has grown from a small to one of the best leading digital travel companies. Part of Events Factory Rwanda. (NASDAQ: BKNG), SmartBookings.rw mission is to make it easier for everyone to experience the world.',
    livelink: 'https://smartbookings.rw/Home/',
    repository: '#',
  },
  {
    name: 'Accreditation System',
    languages: ['Html', 'Css', 'JavaScript', 'Bootstrap', 'PHP', 'MySql'],
    image: 'accreditation.png',
    description: 'Accreditation is an official, written approval for the operation of a specific system in a specific environment, as documented in the certification report.',
    livelink: 'https://accreditation.smartevent.rw/Login/',
    repository: '#',
  },
  {
    name: 'Membership System',
    languages: ['Html', 'Css', 'JavaScript', 'Bootstrap', 'PHP', 'MySql'],
    image: 'membership.png',
    description: 'Membership System software helps you manage your members , grow your membership base, and run your business from anywhere.',
    livelink: 'https://app.smartevent.rw/Auth/SigIn',
    repository: '#',
  },
  {
    name: 'Registration System',
    languages: ['Html', 'Css', 'JavaScript', 'PHP', 'MySql'],
    image: 'registration.png',
    description: 'Image result for registration system Registration systems, the third part of a demographic data system, are generally designed to count vital events: births, deaths, marriages, and entries and exits at international boundaries.',
    livelink: 'https://register.smartevent.rw/Authentication/',
    repository: '#',
  },
  {
    name: 'African Insurance Organisation Website',
    languages: ['Html', 'Css', 'JavaScript', 'Bootstrap'],
    image: 'aiosystem.png',
    description: 'The African Insurance Organisation (AIO), established in 1972, is a non-governmental organisation recognised by many African governments.',
    livelink: 'https://aimemalaika.github.io/portofolio',
    repository: '#',
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
  if (localStorage.getItem('userdata') !== null) {
    const data = JSON.parse(localStorage.getItem('userdata'));
    document.querySelector('[name="firstname"]').value = data.firstname;
    document.querySelector('[name="lastname"]').value = data.lastname;
    document.querySelector('[name="_replyto"]').value = data.email;
    document.querySelector('[name="fullname"]').value = data.fullname;
    document.querySelector('[name="message"]').value = data.messge;
  }
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
  } else {
    localStorage.clear();
    const userInfo = {
      firstname: document.querySelector('[name="firstname"]').value,
      lastname: document.querySelector('[name="lastname"]').value,
      email: document.querySelector('[name="_replyto"]').value,
      fullname: document.querySelector('[name="fullname"]').value,
      messge: document.querySelector('[name="message"]').value,
    };
    localStorage.setItem('userdata', JSON.stringify(userInfo));
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