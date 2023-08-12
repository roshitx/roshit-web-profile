// dark-mode.js
const darkModeIcon = document.getElementById('dark-mode-icon');
const html = document.querySelector('html');

const toggleDarkMode = () => {
  // toggle the icon between sun and moon
  if (darkModeIcon.classList.contains('fa-sun')) {
    darkModeIcon.classList.remove('fa-sun');
    darkModeIcon.classList.add('fa-moon');
    // activate dark mode
    html.classList.add('dark');
    localStorage.theme = 'dark';
  } else {
    darkModeIcon.classList.remove('fa-moon');
    darkModeIcon.classList.add('fa-sun');
    // deactivate dark mode
    html.classList.remove('dark');
    localStorage.theme = 'light';
  }
};

const initDarkMode = () => {
  if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    darkModeIcon.classList.remove('fa-sun');
    darkModeIcon.classList.add('fa-moon');
  } else {
    darkModeIcon.classList.remove('fa-moon');
    darkModeIcon.classList.add('fa-sun');
  }
  const darkModeToggle = document.getElementById('dark-mode-toggle');
  darkModeToggle.addEventListener('click', toggleDarkMode);
};

export default initDarkMode;
