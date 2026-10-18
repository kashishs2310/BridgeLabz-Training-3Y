"use strict";

function showMessageBroken() {
  greeting = "Welcome";
  console.log(greeting);
}

try {
  showMessageBroken();
} catch (err) {
  console.log(`Original code failed -> ${err.name}: ${err.message}`);
}

function showMessage() {
  const greeting = "Welcome";
  console.log(greeting);
}
showMessage();
console.log("typeof greeting outside function:", typeof greeting);

function showMessageDebug() {
  debugger;
  const greeting = "Welcome";
  console.log(greeting);
}
showMessageDebug();