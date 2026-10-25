// Q7: Login Form Validation using RegExp

// Return a list of error messages for the username
function getUsernameErrors(username) {
  const errors = [];
  if (!/^.{5,}$/.test(username)) errors.push("Username must be at least 5 characters.");
  return errors;
}

// Return a list of specific error messages for the password
function getPasswordErrors(password) {
  const errors = [];
  if (!/^.{8,}$/.test(password)) errors.push("Password must be at least 8 characters.");
  if (!/\d/.test(password)) errors.push("Password must include a number.");
  if (!/[A-Z]/.test(password)) errors.push("Password must include an uppercase letter.");
  if (!/[a-z]/.test(password)) errors.push("Password must include a lowercase letter.");
  if (!/[^A-Za-z0-9]/.test(password)) errors.push("Password must include a special character.");
  return errors;
}

// Show errors as a list under a field
function showErrors(listId, errors) {
  document.getElementById(listId).innerHTML = errors.map((msg) => `<li>${msg}</li>`).join("");
}

document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const userErrors = getUsernameErrors(username);
  const passErrors = getPasswordErrors(password);
  showErrors("usernameErrors", userErrors);
  showErrors("passwordErrors", passErrors);

  const message = document.getElementById("message");
  message.textContent =
    userErrors.length === 0 && passErrors.length === 0 ? "Login successful!" : "";
});