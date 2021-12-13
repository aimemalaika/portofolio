const navigation = document.querySelector('.navigation')
const scroll = document.querySelector('.toolbar')
const expandMenu = () => {
    navigation.classList.remove('animate-left');
    navigation.classList.add('animate-right')
}

const closeMenu = () => {
    navigation.classList.remove('animate-right')
    navigation.classList.add('animate-left');
}

document.addEventListener('scroll', function (){
    if (window.scrollY > 0 && !scroll.classList.contains('sticky')){
       scroll.classList.add('sticky')
    }
   else {
       scroll.classList.remove('sticky')
   }
})

document.querySelector('.open').addEventListener('click', expandMenu)
let closeClass = document.querySelectorAll('.close')

closeClass.forEach((element => element.addEventListener('click',closeMenu)))
