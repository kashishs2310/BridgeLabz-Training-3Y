// Q5 - Frontend Rush: Avoiding Callback Hell
// Pipeline: design -> build -> test -> deploy -> celebrate (1 second each)

// ================= PART 1: Nested callbacks (callback hell) =================
function stepWithCallback(name, callback) {
  setTimeout(() => {
    console.log(`[Callback] ${name} done`);
    callback();
  }, 1000);
}

function runWithCallbacks(done) {
  stepWithCallback("Design", () => {
    stepWithCallback("Build", () => {
      stepWithCallback("Test", () => {
        stepWithCallback("Deploy", () => {
          stepWithCallback("Celebrate", () => {
            console.log("[Callback] Pipeline finished\n");
            done(); // start the async/await version afterwards
          });
        });
      });
    });
  });
}

// ================= PART 2: async/await version =================
function stepWithPromise(name) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`[Async/Await] ${name} done`);
      resolve();
    }, 1000);
  });
}

async function runWithAsyncAwait() {
  try {
    await stepWithPromise("Design");
    await stepWithPromise("Build");
    await stepWithPromise("Test");
    await stepWithPromise("Deploy");
    await stepWithPromise("Celebrate");
    console.log("[Async/Await] Pipeline finished");
  } catch (error) {
    console.error("Pipeline error:", error.message);
  }
}

// Run callback version first, then the async/await version
runWithCallbacks(runWithAsyncAwait);

/*
  WHY async/await IMPROVES READABILITY:
  - Code is flat and reads top-to-bottom like synchronous code, instead of
    drifting to the right with every nested callback (the "pyramid of doom").
  - A single try/catch handles errors for every step; with callbacks each
    level needs its own error handling.
  - Adding, removing or reordering a step is a one-line change.
  - It is easier to debug because stack traces and breakpoints follow a
    natural order.
*/