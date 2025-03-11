// This script initializes the theme based on localStorage
// It runs immediately to prevent a flash of unstyled content

(function() {
  const savedTheme = localStorage.getItem('theme') || 'dark';
  if (savedTheme === 'light') {
    document.documentElement.classList.add('light-mode');
  } else {
    document.documentElement.classList.remove('light-mode');
  }
})();
