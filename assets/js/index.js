const navigation = document.querySelector('.navigation');
const header = document.querySelector('.toolbar');
const navItems = document.querySelectorAll('.nav-item');
const expandMenu = () => {
  navigation.classList.remove('animate-left');
  navigation.classList.add('animate-right');
};

const closeMenu = () => {
  navigation.classList.remove('animate-right');
  navigation.classList.add('animate-left');
};

const setActive = (target = null) => {
  navItems.forEach((element) => {
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
      setActive('#portofolio');
      break;
    case window.scrollY >= 2406.75 && window.scrollY < 3257.5:
      setActive('#about');
      break;
    case window.scrollY >= 3257.5:
      setActive('#contact-form');
      break;
    default:
      setActive();
      break;
  }
});

document.querySelector('.open').addEventListener('click', expandMenu);
const closeClass = document.querySelectorAll('.close');
closeClass.forEach(((element) => element.addEventListener('click', closeMenu)));