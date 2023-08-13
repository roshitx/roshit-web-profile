const initClickOutside = () => {
  const navMenu = document.querySelector('#nav-menu');
  // CLICK OUTSIDE HAMBURGER
  window.addEventListener('click', function (e) {
    if (e.target != hamburger && e.target != navMenu) {
      hamburger.classList.remove('hamburger-active');
      navMenu.classList.add('hidden');
    }
  });
  // CLICK OUTSIDE HAMBURGER END
};

export default initClickOutside;