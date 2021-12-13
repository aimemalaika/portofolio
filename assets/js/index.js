const navigation = document.querySelector('.navigation');
const header = document.querySelector('.toolbar');
const expandMenu = () => {
  navigation.classList.remove('animate-left');
  navigation.classList.add('animate-right');
}

const closeMenu = () => {
  navigation.classList.remove('animate-right');
  navigation.classList.add('animate-left');
}

document.addEventListener('scroll', function () {
  if (window.scrollY > 0) {
    if (!header.classList.contains('sticky')) {
      header.classList.add('sticky');
    }
  } else {
    header.classList.remove('sticky');
  }
})

document.querySelector('.open').addEventListener('click', expandMenu);
let closeClass = document.querySelectorAll('.close');
closeClass.forEach((element => element.addEventListener('click', closeMenu)));