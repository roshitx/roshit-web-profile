// loader.js

const initLoader = () => {
    const loader = document.getElementById('loader');
  
    window.addEventListener('load', function () {
      loader.style.display = 'none';
    });
  };
  
  export default initLoader;
  