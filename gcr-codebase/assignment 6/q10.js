// Q10 - The Final Delivery: Async Pipeline Debugger

// Creates a step that takes a random 1-2s delay and may fail (15% chance).
function createStep(name) {
  return function () {
    return new Promise((resolve, reject) => {
      const delay = 1000 + Math.random() * 1000;
      setTimeout(() => {
        if (Math.random() < 0.15) {
          reject(new Error(`${name} failed`));
        } else {
          resolve(`${name} succeeded`);
        }
      }, delay);
    });
  };
}

const takeOrder = createStep("takeOrder");
const prepare = createStep("prepare");
const pack = createStep("pack");
const dispatch = createStep("dispatch");
const deliver = createStep("deliver");

async function runPipeline() {
  console.log("Start Pipeline");
  try {
    /*
      ASYNC / EVENT LOOP NOTES:
      - Each `await` PAUSES runPipeline (not the whole program). The function
        is suspended and the call stack is freed, so the event loop can run
        other work while the timer counts down.
      - When the timer fires, its callback resolves the promise. The
        continuation of runPipeline is queued as a MICROTASK and resumes
        right after the current macrotask finishes.
      - If a promise rejects, `await` throws and control jumps straight to
        the catch block, skipping all remaining steps.
    */
    await takeOrder();
    console.log("Step 1: Order taken");

    await prepare();
    console.log("Step 2: Food prepared");

    await pack();
    console.log("Step 3: Package ready");

    await dispatch();
    console.log("Step 4: Out for delivery");

    await deliver();
    console.log("Delivery completed!");
  } catch (error) {
    console.error(`Error: ${error.message}`);
    console.log("Pipeline failed!");
  }
}

runPipeline();

// This line runs BEFORE the pipeline finishes, showing that runPipeline()
// does not block the main thread.
console.log("(Main thread is free while the pipeline runs asynchronously)");