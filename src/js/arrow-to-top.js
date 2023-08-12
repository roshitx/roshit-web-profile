// arrow-to-top.js

const initArrowToTop = () => {
  const arrowBtn = document.getElementById('arrow-btn');
  const homeSection = document.getElementById('home');

  window.addEventListener('scroll', () => {
    if (homeSection.getBoundingClientRect().top < 0) {
      arrowBtn.style.opacity = '1';
      arrowBtn.animate([{ transform: 'scale(0)' }, { transform: 'scale(1)' }], {
        duration: 300,
        easing: 'ease-in-out',
        fill: 'forwards',
      });
    } else {
      arrowBtn.style.opacity = '1';
      arrowBtn.animate([{ transform: 'scale(1)' }, { transform: 'scale(0)' }], {
        duration: 300,
        easing: 'ease-in-out',
        fill: 'forwards',
      });
    }
  });
};

export default initArrowToTop;
