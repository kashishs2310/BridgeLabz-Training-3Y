console.log("--- Original ---");
function outer() {
  console.log(count);
  var count = 5;
  function inner() {
    console.log(count);
    var count = 10;
  }
  inner();
}
outer();

console.log("\n--- Without inner var: closure reads outer's count ---");
function outer2() {
  var count = 5;
  function inner() { console.log(count); }
  inner();
}
outer2();

console.log("\n--- Arrow inner ---");
function outer3() {
  console.log(count);
  var count = 5;
  const inner = () => {
    console.log(count);
    var count = 10;
  };
  inner();
}
outer3();
try {
  (function () {
    early();
    const early = () => {};
  })();
} catch (e) {
  console.log(`${e.name}: ${e.message}`);
}