let count = 0;

function increment() {
  count++;
  console.log("Incremented -> count =", count);
}

function decrement() {
  count--;
  console.log("Decremented -> count =", count);
}

console.log("--- Simulating clicks ---");
increment();
increment();
increment();
decrement();

function counterWithNested() {
  let count = 100;

  function nestedUpdate() {
    count += 10;
    console.log("Nested function updated local count =", count);
  }

  nestedUpdate();
  console.log("Local count after nested call =", count);
}

console.log("--- Nested function scope ---");
counterWithNested();
console.log("Global count is unaffected =", count);