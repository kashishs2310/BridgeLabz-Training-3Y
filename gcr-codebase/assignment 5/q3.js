// Q3: Arrow function vs normal function and `this`

// --- Version 1: arrow function (problem) ---
const user = {
  name: "Kashish",
  // Arrow function: does NOT get its own `this`
  showName: () => {
    console.log("Arrow function  ->", this.name);
  },
};

user.showName(); // undefined

/*
  Why is this.name undefined?
  - Arrow functions do not have their own `this`. They use the `this` of the
    surrounding (lexical) scope where they were written.
  - The object literal { ... } is NOT a scope, so the arrow function's `this`
    is the `this` of the outer scope, not the `user` object.
  - In a Node.js file, that outer `this` is module.exports (an empty object {}),
    so this.name is undefined. In a browser, `this` would be `window`
    (window.name is an empty string "").
*/

// --- Version 2: fixed using a normal function ---
const userFixed = {
  name: "Kashish",
  // Normal function: `this` is the object that calls the method
  showName: function () {
    console.log("Normal function ->", this.name);
  },
};

userFixed.showName(); // Kashish
// Called as userFixed.showName(), so `this` refers to userFixed.