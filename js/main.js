const menuBtn = document.querySelector(".menu-btn");
const hamburger = document.querySelector(".menu-btn__burger");
const nav = document.querySelector('.my-nav');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.menu-nav__item');


let showNav = false;

menuBtn.addEventListener('click', addOpen);

function addOpen() {
    if(!showNav) {
        menuBtn.classList.add('open');
        hamburger.classList.add('open');
        nav.classList.add('open');
        menuNav.classList.add('open');
        navItems.forEach(item => item.classList.add('open'));

        showNav = true;
    } else {
        menuBtn.classList.remove('open');
        hamburger.classList.remove("open");
        nav.classList.remove('open');
        menuNav.classList.remove('open');
        navItems.forEach(item => item.classList.remove('open'));

        showNav = false
    }
}

