const numbers = [];
for (let i = 1; i <= 30; i++) {
  numbers.push(i);
}

const results = [];

for (let i = 0; i < numbers.length; i++) {
  const num = numbers[i];

  if (num % 3 === 0 && num % 5 === 0) {
    results.push("FizzBuzz");
  } else if (num % 2 === 0) {
    results.push("Even");
  } else {
    results.push("Odd");
  }
}

console.log("Results array:", results);

for (let i = 0; i < numbers.length; i++) {
  console.log(`${numbers[i]} -> ${results[i]}`);
}