// Q3: Multi-Step Form with Next/Back & Validation

const steps = document.querySelectorAll('.step');
const backBtn = document.getElementById('backBtn');
const nextBtn = document.getElementById('nextBtn');
const progress = document.getElementById('progress');
const formArea = document.getElementById('formArea');
const summary = document.getElementById('summary');
const restartBtn = document.getElementById('restartBtn');

let currentStep = 0;

// One config entry per step: which input it uses and how to validate it
const stepConfig = [
  {
    id: 'name',
    validate: (value) => (value.trim().length >= 2 ? '' : 'Name must be at least 2 characters.'),
  },
  {
    id: 'email',
    validate: (value) =>
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()) ? '' : 'Enter a valid email address.',
  },
  {
    id: 'password',
    validate: (value) => (value.length >= 6 ? '' : 'Password must be at least 6 characters.'),
  },
];

// Show only the current step and update buttons/progress text
function showStep(index) {
  steps.forEach((step, i) => step.classList.toggle('active', i === index));
  backBtn.disabled = index === 0;
  nextBtn.textContent = index === steps.length - 1 ? 'Finish' : 'Next';
  progress.textContent = `Step ${index + 1} of ${steps.length}`;
  document.getElementById(stepConfig[index].id).focus();
}

// Fill and display the summary once all steps are complete
function showSummary() {
  document.getElementById('sumName').textContent = document.getElementById('name').value.trim();
  document.getElementById('sumEmail').textContent = document.getElementById('email').value.trim();
  document.getElementById('sumPassword').textContent = '*'.repeat(document.getElementById('password').value.length);
  formArea.style.display = 'none';
  summary.style.display = 'block';
  progress.textContent = 'All steps completed';
}

// Next: validate current input first, only then move ahead
function goNext() {
  const config = stepConfig[currentStep];
  const input = document.getElementById(config.id);
  const errorBox = steps[currentStep].querySelector('.error');
  const message = config.validate(input.value);

  errorBox.textContent = message;
  if (message) return; // invalid -> stay on this step

  if (currentStep < steps.length - 1) {
    currentStep++;
    showStep(currentStep);
  } else {
    showSummary();
  }
}

// Back: go to previous step
function goBack() {
  if (currentStep > 0) {
    currentStep--;
    showStep(currentStep);
  }
}

nextBtn.addEventListener('click', goNext);
backBtn.addEventListener('click', goBack);

// Enter key behaves like Next
formArea.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    goNext();
  }
});

// Clear error as soon as the user edits the field
formArea.addEventListener('input', (event) => {
  const errorBox = event.target.closest('.step')?.querySelector('.error');
  if (errorBox) errorBox.textContent = '';
});

// Start over: clear everything
restartBtn.addEventListener('click', () => {
  stepConfig.forEach((c) => (document.getElementById(c.id).value = ''));
  currentStep = 0;
  summary.style.display = 'none';
  formArea.style.display = 'block';
  showStep(0);
});

showStep(0);