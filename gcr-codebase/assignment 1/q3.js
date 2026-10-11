const expenses = [4500, 1800, 12000, 2500, 1500];

let total = 0;
for (let i = 0; i < expenses.length; i++) {
  total += expenses[i];
}

const average = total / expenses.length;

let finalAmount = total;
finalAmount += finalAmount * 0.10;

console.log("Total expenses   :", total.toFixed(2));
console.log("Average expense  :", average.toFixed(2));
console.log("Final (with 10% tax):", finalAmount.toFixed(2));