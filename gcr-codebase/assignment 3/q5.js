console.log("--- Original code ---");
console.log(score);
announce();
var score = 50;
function announce() { console.log("Game started"); }
let status = "ready";
startGame();
function startGame() {
  console.log(status);
}

console.log("\n--- The real trap: calling startGame() BEFORE let status ---");
function trap() {
  try {
    startGame2();
  } catch (e) {
    console.log(`${e.name}: ${e.message}`);
  }
  let status2 = "ready";
  function startGame2() { console.log(status2); }
  startGame2();
}
trap();

console.log("\n--- Fixed version ---");
{
  var score2 = 50;
  let status3 = "ready";
  function announce2() { console.log("Game started"); }
  function startGame3() { console.log(status3); }
  console.log(score2);
  announce2();
  startGame3();
}

console.log("\n--- Arrow function comparison ---");
try {
  announceArrow();
} catch (e) {
  console.log(`${e.name}: ${e.message}`);
}
const announceArrow = () => console.log("Game started (arrow)");
announceArrow();