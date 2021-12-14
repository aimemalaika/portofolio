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