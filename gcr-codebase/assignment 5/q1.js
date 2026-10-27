// Q1: Callback flow with greetUser and showEndMessage

// Callback function: runs AFTER the greeting is printed
function showEndMessage() {
  console.log("Welcome to the course!");
}

// Higher-order function: receives another function (callback) as an argument
function greetUser(name, callback) {
  console.log(`Hello ${name}`); // Step 1: print greeting
  callback();                   // Step 2: execute the callback
}

// Flow: greetUser starts -> prints greeting -> calls showEndMessage
greetUser("Kashish", showEndMessage);

// Output:
// Hello Kashish
// Welcome to the course!