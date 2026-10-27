// Q2: applyOperation(numbers, operation) using a callback

// Applies the callback to every element and returns a new array
function applyOperation(numbers, operation) {
  const result = [];
  for (let i = 0; i < numbers.length; i++) {
    result.push(operation(numbers[i])); // callback decides what happens to each number
  }
  return result;
}

const numbers = [1, 2, 3, 4];

// Callback 1: double a number
const double = (num) => num * 2;

// Callback 2: square a number
const square = (num) => num * num;

console.log("Original:", numbers);                           // [ 1, 2, 3, 4 ]
console.log("Doubled :", applyOperation(numbers, double));   // [ 2, 4, 6, 8 ]
console.log("Squared :", applyOperation(numbers, square));   // [ 1, 4, 9, 16 ]