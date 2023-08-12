// trailer.js

const animateTrailer = (e, interacting) => {
  const x = e.clientX - trailer.offsetWidth / 2,
    y = e.clientY - trailer.offsetHeight / 2;

  const keyframes = {
    transform: `translate(${x}px, ${y}px) scale(${interacting ? 4 : 1})`,
  };

  trailer.animate(keyframes, {
    duration: 800,
    fill: 'forwards',
  });
};

const getTrailerClass = (type) => {
  switch (type) {
    case 'about':
      return 'fa-solid fa-address-card';
    case 'projects':
      return 'fa-solid fa-list-check';
    case 'achievement':
      return 'fa-solid fa-trophy';
    case 'contact':
      return 'fa-solid fa-phone';
    case 'link':
      return 'fa-solid fa-link';
    case 'arrow-down':
      return 'fa-solid fa-caret-down';
    case 'arrow-right':
      return 'fa-solid fa-caret-right';
    case 'arrow-left':
      return 'fa-solid fa-caret-left';
    case 'email':
      return 'fa-solid fa-envelope';
    case 'arrow-top':
      return 'fa-solid fa-chevron-up';
    case 'skill':
      return 'fa-solid fa-brain';
    case 'view':
      return 'fa-solid fa-magnifying-glass';
    default:
      return 'fa-solid fa-play';
  }
};

const initTrailer = () => {
  const trailer = document.getElementById('trailer');
  const icon = document.getElementById('trailer-icon');

  window.onmousemove = (e) => {
    const interactable = e.target.closest('#interactable');
    const interacting = interactable !== null;

    animateTrailer(e, interacting);

    trailer.dataset.type = interacting ? interactable.dataset.type : '';

    if (interacting) {
      icon.className = getTrailerClass(interactable.dataset.type);
    }
  };
};

export default initTrailer;
