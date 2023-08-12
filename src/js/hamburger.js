// hamburger.js

const toggleHamburger = () => {
    const hamburger = document.querySelector('#hamburger');
    const navMenu = document.querySelector('#nav-menu');
    
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
  };
  
  const initHamburger = () => {
    const hamburger = document.querySelector('#hamburger');
    hamburger.addEventListener('click', toggleHamburger);
  };
  
  export default initHamburger;
  