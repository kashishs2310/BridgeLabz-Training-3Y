var bonus = 5000;

function calculateSalary(isPermanent) {

  let salary = 40000;

  if (isPermanent) {
    salary = salary + bonus;
  }

  console.log(`isPermanent = ${isPermanent} -> Total salary: ${salary}`);
  return salary;
}

calculateSalary(true);
calculateSalary(false);

console.log("Global bonus after calls:", bonus);

console.log("Is salary accessible globally?", typeof salary);