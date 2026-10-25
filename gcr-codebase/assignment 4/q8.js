// Q8: Dynamic Object Updater

const user = { name: "John", email: "john@mail.com", age: 21 };

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const ageInput = document.getElementById("age");
const details = document.getElementById("details");

// Show the current object details below the form
function renderUser() {
  details.innerHTML = `
    <h3>Current User Object</h3>
    <p><strong>Name:</strong> ${user.name}</p>
    <p><strong>Email:</strong> ${user.email}</p>
    <p><strong>Age:</strong> ${user.age}</p>`;
}

// Fill the form with the object's current values
function fillForm() {
  nameInput.value = user.name;
  emailInput.value = user.email;
  ageInput.value = user.age;
}

// Update the object from the form values
function updateUser() {
  user.name = nameInput.value;
  user.email = emailInput.value;
  user.age = Number(ageInput.value);
  renderUser();
}

// Update on submit, and also in real time while typing
document.getElementById("userForm").addEventListener("submit", (e) => {
  e.preventDefault();
  updateUser();
  console.log("Updated user:", user);
});
[nameInput, emailInput, ageInput].forEach((input) => input.addEventListener("input", updateUser));

fillForm();
renderUser();