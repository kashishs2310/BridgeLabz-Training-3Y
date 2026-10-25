// Q6: Employee Management System (Classes + Object Methods)

class Employee {
  constructor(id, name, department, salary) {
    this.id = id;
    this.name = name;
    this.department = department;
    this.salary = salary; // monthly salary
  }

  // Annual salary = monthly salary x 12
  getAnnualSalary() {
    return this.salary * 12;
  }

  // Increase monthly salary by the given percentage
  applyBonus(percent) {
    this.salary += (this.salary * percent) / 100;
  }
}

// Create 5 employees
const employees = [
  new Employee(1, "Aarav", "Engineering", 60000),
  new Employee(2, "Diya", "Design", 45000),
  new Employee(3, "Rohan", "Marketing", 40000),
  new Employee(4, "Sneha", "HR", 38000),
  new Employee(5, "Vikram", "Finance", 52000),
];

console.log("Annual salaries:");
employees.forEach((e) => console.log(`${e.name} (${e.department}): Rs. ${e.getAnnualSalary()}`));

// Apply a 10% bonus to one employee
employees[1].applyBonus(10);
console.log(`\nAfter 10% bonus, ${employees[1].name}'s annual salary: Rs. ${employees[1].getAnnualSalary()}`);

// Total annual payout of the company using reduce()
const totalPayout = employees.reduce((sum, e) => sum + e.getAnnualSalary(), 0);
console.log(`\nTotal annual payout: Rs. ${totalPayout}`);