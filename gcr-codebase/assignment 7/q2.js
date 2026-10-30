// Q2: Live Character Counter with Warning Behavior

const MAX_CHARS = 100;
const WARNING_AT = 20;

const textBox = document.getElementById('textBox');
const counter = document.getElementById('counter');
const resetBtn = document.getElementById('resetBtn');

// Update counter text and colour based on remaining characters
function updateCounter() {
  const remaining = MAX_CHARS - textBox.value.length;
  counter.textContent = `${remaining} characters remaining`;

  counter.classList.remove('warning', 'danger');
  if (remaining <= 0) {
    counter.classList.add('danger');   // red at 0
  } else if (remaining <= WARNING_AT) {
    counter.classList.add('warning');  // yellow at 20 or less
  }
}

// Block typing once the limit is reached
textBox.addEventListener('keydown', (event) => {
  const limitReached = textBox.value.length >= MAX_CHARS;
  const hasSelection = textBox.selectionStart !== textBox.selectionEnd;

  // keys that add a character: printable keys (length 1) and Enter
  const addsCharacter =
    (event.key.length === 1 && !event.ctrlKey && !event.metaKey) || event.key === 'Enter';

  if (limitReached && addsCharacter && !hasSelection) {
    event.preventDefault(); // stop further typing (Backspace, Delete, arrows still work)
  }
});

// Handles typing, deleting and pasting
textBox.addEventListener('input', () => {
  if (textBox.value.length > MAX_CHARS) {
    textBox.value = textBox.value.slice(0, MAX_CHARS); // trim pasted overflow
  }
  updateCounter();
});

// Reset clears the text area and the counter
resetBtn.addEventListener('click', () => {
  textBox.value = '';
  updateCounter();
  textBox.focus();
});

updateCounter();