// Q2 - Task Scheduler: Micro vs Macro Challenge

console.log("Start");

// Macrotask: goes to the macrotask (task) queue after 0ms
setTimeout(() => {
  console.log("setTimeout callback (macrotask)");
}, 0);

// Microtask: goes to the microtask queue as soon as the promise is resolved
Promise.resolve().then(() => {
  console.log("Promise.then callback (microtask)");
});

// Synchronous log: runs immediately on the call stack
console.log("Synchronous log");

console.log("End");

/*
  Expected output:
    Start
    Synchronous log
    End
    Promise.then callback (microtask)
    setTimeout callback (macrotask)

  WHY MICROTASKS RUN BEFORE MACROTASKS:
  1. All synchronous code runs first on the call stack
     (Start, Synchronous log, End).
  2. When the call stack becomes empty, the event loop FIRST drains the
     ENTIRE microtask queue (Promise callbacks, queueMicrotask, etc.).
  3. Only after the microtask queue is empty does the event loop pick the
     next macrotask (setTimeout, setInterval, I/O) from the task queue.
  So even with a 0ms delay, setTimeout must wait for its turn as a macrotask,
  while the Promise callback is already waiting in the higher-priority
  microtask queue.
*/