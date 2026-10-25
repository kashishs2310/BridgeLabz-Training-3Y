// Q2: Student Form Validator (Forms + RegExp)

// Validation rules: regex + error message for each field
const rules = {
  name: { regex: /^[A-Za-z]+(?: [A-Za-z]+)*$/, message: "Name must contain only alphabets." },
  email: { regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email (example@domain.com)." },
  phone: { regex: /^\d{10}$/, message: "Phone must be exactly 10 digits." },
  // Lookaheads: at least 1 uppercase, 1 number, 1 special character
  password: {
    regex: /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/,
    message: "Password needs 1 uppercase, 1 number and 1 special character.",
  },
};

// Validate one field and update its border + error message
function validateField(fieldId) {
  const input = document.getElementById(fieldId);
  const error = document.getElementById(fieldId + "Error");
  const isValid = rules[fieldId].regex.test(input.value.trim());

  input.classList.toggle("valid", isValid);   // green border
  input.classList.toggle("invalid", !isValid); // red border
  error.textContent = isValid ? "" : rules[fieldId].message;
  return isValid;
}

// Live validation while typing
Object.keys(rules).forEach((id) => {
  document.getElementById(id).addEventListener("input", () => validateField(id));
});

document.getElementById("studentForm").addEventListener("submit", (e) => {
  e.preventDefault();
  // Validate every field (no short-circuit so all errors show)
  const results = Object.keys(rules).map(validateField);
  const allValid = results.every(Boolean);
  document.getElementById("result").textContent = allValid
    ? "Registration successful!"
    : "";
});