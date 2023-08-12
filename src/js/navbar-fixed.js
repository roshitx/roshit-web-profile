// navbar-fixed.js

const initNavbarFixed = () => {
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop;

  window.onscroll = function () {
    if (window.scrollY > fixedNav) {
      header.classList.add('navbar-fixed');
    } else {
      header.classList.remove('navbar-fixed');
    }
  };
};

export default initNavbarFixed;
