// Q9: Form Submit Blocker with preventDefault() and Live Errors

const form = document.getElementById('myForm');
const successMsg = document.getElementById('successMsg');

// Validation rules: each returns an error message, or '' if the value is valid
const validators = {
  name: (value) => (value.trim() === '' ? 'Name is required.' : ''),
  email: (value) => {
    if (value.trim() === '') return 'Email is required.';
    if (!value.includes('@')) return 'Email must contain @.';
    return '';
  },
  password: (value) => (value.length < 6 ? 'Password must be at least 6 characters.' : ''),
};

// Show or clear the error for one field. Returns true if the field is valid.
function validateField(fieldName) {
  const input = document.getElementById(fieldName);
  const errorBox = document.getElementById(`${fieldName}Error`);
  const message = validators[fieldName](input.value);

  errorBox.textContent = message;
  input.classList.toggle('invalid', message !== '');
  return message === '';
}

// On submit: always stop the default submission, then validate every field
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const results = Object.keys(validators).map(validateField); // validate all, show all errors
  const allValid = results.every(Boolean);

  if (allValid) {
    successMsg.style.display = 'block';
    form.reset();
  } else {
    successMsg.style.display = 'none';
  }
});

// Live correction: once an error is showing, re-check while the user types
form.addEventListener('input', (event) => {
  const fieldName = event.target.id;
  if (!validators[fieldName]) return;

  successMsg.style.display = 'none';
  const errorBox = document.getElementById(`${fieldName}Error`);
  if (errorBox.textContent !== '') {
    validateField(fieldName); // error disappears automatically when the input becomes valid
  }
});