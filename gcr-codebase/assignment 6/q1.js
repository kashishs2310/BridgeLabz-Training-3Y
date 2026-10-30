// Q1 - The Startup Morning: Async Coffee Maker
// Each step returns a Promise that resolves after 1-2 seconds.
// Steps are chained with .then(); any failure is handled by a single .catch().

// Helper: random delay between 1000ms and 2000ms
const randomDelay = () => 1000 + Math.random() * 1000;

// Helper: simulate a random failure (20% chance)
const maybeFail = (stepName) => {
  if (Math.random() < 0.2) {
    throw new Error(`${stepName} failed unexpectedly!`);
  }
};

function boilWater() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        maybeFail("Boiling water");
        console.log("Step 1: Water boiled");
        resolve("boiled water");
      } catch (err) {
        reject(err);
      }
    }, randomDelay());
  });
}

function brewCoffee(water) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        maybeFail("Brewing coffee");
        console.log(`Step 2: Coffee brewed using ${water}`);
        resolve("brewed coffee");
      } catch (err) {
        reject(err);
      }
    }, randomDelay());
  });
}

function pourIntoCup(coffee) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        maybeFail("Pouring coffee");
        console.log(`Step 3: Poured ${coffee} into a cup`);
        resolve("cup of coffee");
      } catch (err) {
        reject(err);
      }
    }, randomDelay());
  });
}

console.log("Starting the coffee process...");

// Promise chaining: the value resolved by one step is passed to the next
boilWater()
  .then((water) => brewCoffee(water))
  .then((coffee) => pourIntoCup(coffee))
  .then(() => console.log("Coffee ready for the team!"))
  .catch((error) => console.error("Coffee process failed:", error.message));