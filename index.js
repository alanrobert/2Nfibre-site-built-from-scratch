const openNavButton = document.getElementById('open-nav')
const closeNavButton = document.getElementById('close-nav')
const nav = document.getElementById('nav')

closeNavButton.addEventListener('click', function(){
    nav.classList.remove('navigation-open')
})

openNavButton.addEventListener('click', function(){
    nav.classList.add('navigation-open')
})