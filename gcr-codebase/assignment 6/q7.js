// Q7 - The Lazy Loader: Promise Combinator Practice

function loadProfile() { return new Promise(r => setTimeout(() => r("Profile Loaded"), 2000)); }
function loadPosts() { return new Promise(r => setTimeout(() => r("Posts Loaded"), 1500)); }
function loadMessages() { return new Promise(r => setTimeout(() => r("Messages Loaded"), 1000)); }

// Wraps a loader so that it is rejected when it is the randomly chosen one
function withRandomRejection(loader, shouldFail, name) {
  return loader().then((result) => {
    if (shouldFail) throw new Error(`${name} failed to load`);
    return result;
  });
}

async function loadDashboard() {
  const moduleNames = ["Profile", "Posts", "Messages"];
  const loaders = [loadProfile, loadPosts, loadMessages];

  // Randomly pick ONE module to reject
  const failingIndex = Math.floor(Math.random() * loaders.length);

  const startTime = Date.now();

  // allSettled never rejects: it waits for every promise and reports each outcome
  const results = await Promise.allSettled(
    loaders.map((loader, i) =>
      withRandomRejection(loader, i === failingIndex, moduleNames[i])
    )
  );

  const endTime = Date.now();

  results.forEach((result, i) => {
    if (result.status === "fulfilled") {
      console.log(`${moduleNames[i]}: SUCCESS -> ${result.value}`);
    } else {
      console.log(`${moduleNames[i]}: FAILED -> ${result.reason.message}`);
    }
  });

  console.log(`Total time taken: ${endTime - startTime} ms`);
}

loadDashboard();