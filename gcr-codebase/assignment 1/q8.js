const currentSalary = 500000;
const incrementRate = 8;

let salary = currentSalary;
const projection = [];

for (let year = 1; year <= 5; year++) {
  salary += salary * (incrementRate / 100);
  projection.push({
    Year: year,
    Salary: Math.round(salary),
  });
}

console.log(`Starting salary: ${currentSalary}, yearly increment: ${incrementRate}%`);
console.table(projection);