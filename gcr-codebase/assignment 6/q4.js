// Q4 - DevOps Delay: Async Timeout Race

// Creates a server "response" that arrives after `delay` ms.
// Randomly fails (20% chance) to simulate a server error.
function server(name, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.2) {
        reject(new Error(`${name} failed to respond`));
      } else {
        resolve(`${name} responded in ${delay / 1000}s`);
      }
    }, delay);
  });
}

// Create both requests once so that all() and race() watch the same servers
const serverA = server("Server A", 2000); // 2 seconds
const serverB = server("Server B", 3000); // 3 seconds

// Promise.all: waits for BOTH; rejects immediately if either fails
Promise.all([serverA, serverB])
  .then((results) => {
    console.log("Deployment completed for all servers");
    console.log(results);
  })
  .catch((error) => console.error("Promise.all error:", error.message));

// Promise.race: settles as soon as the FIRST promise settles
Promise.race([serverA, serverB])
  .then((fastest) => console.log("Fastest response:", fastest))
  .catch((error) => console.error("Promise.race error:", error.message));