// Q3 - Bug Tracker: Callback to Promise Migration

// ---- Original callback-based version (for reference) ----
function fetchBugs(callback) {
  setTimeout(() => callback(["UI glitch", "API timeout", "Login failure"]), 1000);
}

// ---- Promise-based version ----
// Set to true to simulate a random API failure
const simulateFailure = Math.random() < 0.3; // randomly true ~30% of the time

function getBugs() {
  return new Promise((resolve, reject) => {
    // Wrap the old callback-style function inside a Promise
    fetchBugs((bugs) => {
      if (simulateFailure) {
        reject(new Error("API request failed: could not fetch bugs"));
      } else {
        resolve(bugs);
      }
    });
  });
}

console.log("Fetching bugs...");

getBugs()
  .then((bugs) => {
    console.log("Bugs fetched successfully:");
    // console.table prints the array neatly as a table
    console.table(bugs);
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });