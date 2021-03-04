/* getting elements */
const navBar = document.querySelector('.js-navbar');
const header = document.querySelector('.js-header');
const menuBtn = document.querySelector('.js-hamburguer-btn');

/* scrolled menu */
window.onscroll = function() {
  if(window.pageYOffset > 80) {
    header.classList.add('header--scrolled');
    menuBtn.classList.add('hamburger-btn--scrolled');

    if(!scrolled) {
      navbar.style.transform = 'translateY(-70px)';
    }
    setTimeout(function() {
      navbar.style.transform = 'translate(0)';
      scrolled = true;
    }, 500)
  } else {
    header.classList.remove('header--scrolled');
    menuBtn.classList.remove('hamburger-btn--scrolled');
    scrolled = false;
  }
};

/* click on hamburger menu */
function showMenu() {
  if (navBar.classList.contains('navbar', 'js-navbar')) {
    navBar.classList.remove('navbar');
    navBar.classList.add('navbar--mobile');
    disableScroll();
  } else {
    
    navBar.classList.remove('navbar--mobile');
    navBar.classList.add('navbar');
    enableScroll();
  }
}

/* disable and enable srolling */
function disableScroll() {
  document.body.style.overflow = 'hidden';
  document.querySelector('html').scrollTop = window.scrollY;
}

function enableScroll() {
  document.body.style.overflow = null;
}
