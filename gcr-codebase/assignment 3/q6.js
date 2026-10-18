"use strict";

const arg = Number(process.argv[2]);
const limit = Number.isInteger(arg) && arg > 0 ? arg : 5;

console.log(`--- Pyramid with let (limit = ${limit}) ---`);
for (let i = 1; i <= limit; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "* ";
  }
  console.log(row.trimEnd());
}

console.log("\n--- Same pattern with var ---");
for (var a = 1; a <= limit; a++) {
  var line = "";
  for (var b = 1; b <= a; b++) {
    line += "* ";
  }
  console.log(line.trimEnd());
}
console.log(`After loops -> a = ${a}, b = ${b}  (var leaks out of the loop)`);

const fnsVar = [];
for (var k = 0; k < 3; k++) fnsVar.push(() => k);
const fnsLet = [];
for (let m = 0; m < 3; m++) fnsLet.push(() => m);
console.log("var closures:", fnsVar.map(f => f()));
console.log("let closures:", fnsLet.map(f => f()));

try {
  eval('"use strict"; for (z = 0; z < 2; z++) {}');
} catch (e) {
  console.log(`Strict mode caught undeclared loop variable -> ${e.name}: ${e.message}`);
}