// Q9 - Debugging the Event Loop

/*
  PREDICTED OUTPUT (written before running):
    1. Script start
    2. Script end
    3. Promise callback
    4. Timeout callback
*/

console.log("Script start");

setTimeout(() => console.log("Timeout callback"), 0);

Promise.resolve().then(() => console.log("Promise callback"));

console.log("Script end");

/*
  ACTUAL OUTPUT (after running):
    Script start
    Script end
    Promise callback
    Timeout callback

  The actual output matches the prediction.

  EXPLANATION:
  - "Script start" and "Script end" are synchronous, so they run immediately
    on the call stack, in order.
  - setTimeout hands its callback to the Web API / Node timer, which puts it
    in the MACROTASK queue once the delay (0ms) has passed.
  - Promise.resolve().then(...) puts its callback in the MICROTASK queue.
  - When the call stack is empty, the event loop always empties the entire
    microtask queue BEFORE taking the next macrotask. Therefore
    "Promise callback" prints before "Timeout callback", even though the
    timeout delay is 0ms.
*/