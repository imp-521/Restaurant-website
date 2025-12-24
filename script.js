
const bars = document.getElementById("bars")
const menuMobile = document.getElementById('menuMobile')
const navbar = document.getElementById('navbar')

bars.addEventListener('click', () => {
  if (menuMobile.classList.contains('-translate-y-full')) {
    menuMobile.classList.remove('-translate-y-full', 'opacity-0')
    menuMobile.classList.add('translate-y-12', 'opacity-100')
  } else {
    menuMobile.classList.remove('translate-y-12', 'opacity-100')
    menuMobile.classList.add('-translate-y-full', 'opacity-0')
  }
})

window.addEventListener("scroll", ()=>{
    if (window.scrollY > 100) {
        navbar.classList.add('shadow-md')
    }
    else if(window.scrollY === 0){
        navbar.classList.remove('shadow-md')
    }
})

