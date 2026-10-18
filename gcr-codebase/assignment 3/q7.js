"use strict";

class InvalidOperationError extends Error {
  constructor(op) { super(`Invalid operation: "${op}"`); this.name = "InvalidOperationError"; }
}

const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25, num2 = 0;

function calculate(op, a, b) {
  switch (op) {
    case "add":
      return a + b;
    case "subtract":
      return a - b;
    case "divide":
      if (b === 0) throw new RangeError("Cannot divide by zero");
      return a / b;
    case "power":
      return a ** b;
    case "root":
      if (a < 0) throw new RangeError("Cannot take root of a negative number");
      return Math.sqrt(a);
    default:
      throw new InvalidOperationError(op);
  }
}

function runAll(list, a, b) {
  console.log(`===== CALCULATOR SUMMARY (num1=${a}, num2=${b}) =====`);
  for (const op of list) {
    try {
      const result = calculate(op, a, b);
      console.log(`${op.padEnd(9)} -> ${result}`);
    } catch (err) {
      console.log(`${op.padEnd(9)} -> ERROR [${err.name}] ${err.message}`);
    }
  }
}

runAll(operations, num1, num2);

console.log();
runAll(["root", "modulo"], -9, 3);