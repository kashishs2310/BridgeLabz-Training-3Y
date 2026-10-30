// Q8 - Order Processing Flow: Async Retry Mechanism

// Returns a Promise that fails 50% of the time
function submitOrder() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.5) {
        resolve("Order submitted");
      } else {
        reject(new Error("Network error"));
      }
    }, 500);
  });
}

// Tries up to 3 times using a loop + await
async function processOrder() {
  const maxAttempts = 3;

  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      await submitOrder();
      console.log(`Attempt ${attempt}: Success`);
      return "Order processed successfully"; // stop retrying on success
    } catch (error) {
      console.log(`Attempt ${attempt}: Failed`);
    }
  }

  // All attempts failed
  throw new Error("Order could not be processed");
}

// Handle the final failure gracefully
async function main() {
  try {
    const result = await processOrder();
    console.log(result);
  } catch (error) {
    console.error(error.message);
  }
}

main();