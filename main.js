const hamburger = document.getElementById('ham_menu');
const navMenu = document.getElementById('nav_menu');

hamburger.addEventListener('click', toggleHamMenu)
navMenu.addEventListener('click', toggleHamMenu)

function toggleHamMenu () {
    hamburger.classList.toggle('active')
    navMenu.classList.toggle('active')
}