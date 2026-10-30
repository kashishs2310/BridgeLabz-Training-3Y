// Q8: Custom Dropdown Using Only JavaScript (No <select> Tag)

const dropdown = document.getElementById('dropdown');
const dropdownBtn = document.getElementById('dropdownBtn');
const dropdownList = document.getElementById('dropdownList');

// Button shows/hides the options
dropdownBtn.addEventListener('click', () => {
  dropdownList.classList.toggle('open');
});

// Clicking an option updates the button text and closes the list
dropdownList.addEventListener('click', (event) => {
  if (event.target.tagName === 'LI') {
    dropdownBtn.textContent = event.target.textContent;
    dropdownList.classList.remove('open');
  }
});

// Clicking outside closes the dropdown.
// The third argument `true` makes this listener run in the CAPTURING phase.
document.addEventListener(
  'click',
  (event) => {
    if (!dropdown.contains(event.target)) {
      dropdownList.classList.remove('open');
    }
  },
  true
);