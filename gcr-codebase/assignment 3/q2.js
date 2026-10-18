"use strict";

const employees = [
  { name: "Amit", salary: "45000", years: "5" },
  { name: "Sara", salary: "38000", years: "2" },
  { name: "Kiran", salary: "52000", years: "7" },
  { name: "Broken", salary: "abc" }
];

function calculateBonus(emp) {
  if (!("salary" in emp) || !("years" in emp)) {
    throw new Error(`Missing property in record for ${emp.name}`);
  }
  const salary = Number(emp.salary);
  const years = Number(emp.years);
  if (Number.isNaN(salary) || Number.isNaN(years)) {
    throw new TypeError(`Cannot convert salary/years to number for ${emp.name}`);
  }
  const bonus = years > 3 ? salary * 0.1 : salary * 0.05;
  return { salary, years, bonus };
}

for (const emp of employees) {
  try {
    const { salary, years, bonus } = calculateBonus(emp);
    console.log(`Employee: ${emp.name.padEnd(6)} | Salary: Rs.${salary.toLocaleString("en-IN")} | Years: ${years} | Bonus: Rs.${bonus.toLocaleString("en-IN")} | Total: Rs.${(salary + bonus).toLocaleString("en-IN")}`);
  } catch (err) {
    console.log(`ERROR (${err.name}): ${err.message}`);
  }
}