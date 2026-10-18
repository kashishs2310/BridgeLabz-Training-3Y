console.log("--- Sloppy mode ---");
function demoSloppy(a, a) {
  total = 10;
  console.log("a =", a);
  console.log("delete total ->", delete total);
}
demoSloppy(5, 10);

console.log("\n--- Strict mode ---");
try {
  new Function("a", "a", '"use strict"; return a;');
} catch (e) {
  console.log(`1) Duplicate param -> ${e.name}: ${e.message}`);
}
try {
  new Function('"use strict"; total = 10;')();
} catch (e) {
  console.log(`2) Undeclared assignment -> ${e.name}: ${e.message}`);
}
try {
  new Function('"use strict"; var total = 10; delete total;');
} catch (e) {
  console.log(`3) delete variable -> ${e.name}: ${e.message}`);
}

function demoCorrect(first, second) {
  "use strict";
  let total = first + second;
  console.log("\nCorrect version -> total =", total);
  total = undefined;
  return total;
}
demoCorrect(5, 10);

const demoArrow = (a = 0, b = 0) => { const total = a + b; return total; };
console.log("Arrow version ->", demoArrow(5, 10));