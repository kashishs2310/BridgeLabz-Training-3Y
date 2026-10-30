// Q4: Theme Switcher Using Attribute Manipulation

const body = document.body;
const status = document.getElementById('status');
const themeButtons = document.querySelectorAll('[data-theme-btn]');

// Apply a theme using setAttribute() only
function applyTheme(themeName) {
  body.setAttribute('class', `theme-${themeName}`); // class on <body>
  body.setAttribute('data-theme', themeName);       // current theme saved in custom attribute
  status.textContent = `Current theme: ${body.getAttribute('data-theme')}`;
}

themeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    applyTheme(button.getAttribute('data-theme-btn'));
  });
});

// Default theme
applyTheme('light');