const navigation = document.querySelector('.navigation')
const expandMenu = () => {
    navigation.classList.remove('animate-left');
    navigation.classList.add('animate-right')
}

const closeMenu = () => {
    navigation.classList.remove('animate-right')
    navigation.classList.add('animate-left');
}

document.querySelector('.open').addEventListener('click', expandMenu)
document.querySelector('.close').addEventListener('click', closeMenu)