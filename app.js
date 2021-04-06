/* getting elements */
const navBar = document.querySelector('.js-navbar');
const header = document.querySelector('.js-header');
const menuBtn = document.querySelector('.js-hamburguer-btn');
const closeBtn = document.querySelector('.js-x-btn');

/* active item on navbar */
let navItem = document.querySelectorAll('.js-navbar-item');
navItem.forEach(item => {
  item.addEventListener('click', function() {
    navItem.forEach(navItem => navItem.classList.remove('navbar__item--active'));
    this.classList.add('navbar__item--active');
  });
});

/* scrolled menu */
window.onscroll = function() {
  if(window.pageYOffset > 80) {
    header.classList.add('header--scrolled');
    menuBtn.classList.add('hamburger-btn--scrolled');
    closeBtn.classList.add('x-btn--scrolled');

    if(!scrolled) {
      header.style.transform = 'translateY(-70px)';
    }
    setTimeout(function() {
      header.style.transform = 'translate(0)';
      scrolled = true;
    }, 500)
  } else {
    header.classList.remove('header--scrolled');
    menuBtn.classList.remove('hamburger-btn--scrolled');
    closeBtn.classList.remove('x-btn--scrolled');
    scrolled = false;
  }
};

/* click on hamburger menu */
function showMenu() {
  if (navBar.classList.contains('navbar', 'js-navbar')) {
    menuBtn.classList.add('hamburger-btn--clicked');
    closeBtn.classList.add('x-btn');
    closeBtn.classList.remove('x-btn--clicked');
    navBar.classList.remove('navbar');
    navBar.classList.add('navbar--mobile');
    disableScroll();
  } else {
    menuBtn.classList.remove('hamburger-btn--clicked');
    closeBtn.classList.remove('x-btn');
    closeBtn.classList.add('x-btn--clicked');
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

/* get vurrent year */
window.addEventListener('load', (
  function () {
      document.querySelector('.js-current-year').appendChild(
          document.createTextNode(
              new Date().getFullYear()
          )
      );
  }
));

/* USER TEXT EDIT */
const editableDivs = document.querySelectorAll('.js-editable');
const saveEditBtn = document.querySelector('.js-saveBtn');
const editBar = document.querySelector('.js-edit-bar');

hotkeys('ctrl+k, command+k', function() {
  editBar.classList.add('edit-bar--show');
  Array.from(editableDivs).forEach(editableDiv => {
    editableDiv.contentEditable = "true";
  })
  return false;
});
let userVersionArray = [];
saveEditBtn.addEventListener('click', function() {
  Array.from(editableDivs).forEach(editableDiv => {
    let userVersion = editableDiv.innerHTML;
    userVersionArray.push(userVersion);
  });
  localStorage.userEdit = JSON.stringify(userVersionArray);
  editBar.classList.remove('edit-bar--show');
});
window.onload = (event) => {
  if( localStorage.userEdit != null) {
    userEditParse = JSON.parse(localStorage.userEdit);
    for (let i = 0; i < localStorage.userEdit.length; i++) {
      editableDivs[i].innerHTML = userEditParse[i];
    }
  }
}
