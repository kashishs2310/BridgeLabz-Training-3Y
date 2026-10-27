// Q6: Prototype chain: Person -> Faculty -> Professor

// Level 1: Person
function Person(name) {
  this.name = name;
}
Person.prototype.introduce = function () {
  console.log(`Hi, I am ${this.name}.`);
};

// Level 2: Faculty (inherits from Person)
function Faculty(name, department) {
  Person.call(this, name);
  this.department = department;
}
Faculty.prototype = Object.create(Person.prototype);
Faculty.prototype.constructor = Faculty;
Faculty.prototype.showDepartment = function () {
  console.log(`Department: ${this.department}`);
};

// Level 3: Professor (inherits from Faculty)
function Professor(name, department, subject) {
  Faculty.call(this, name, department);
  this.subject = subject;
}
Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.constructor = Professor;
Professor.prototype.teach = function () {
  console.log(`${this.name} teaches ${this.subject}.`);
};

const prof = new Professor("Dr. Sharma", "Computer Science", "Cyber Security");

// A Professor object can access every method up the chain
prof.teach();          // Professor.prototype
prof.showDepartment(); // Faculty.prototype
prof.introduce();      // Person.prototype

// Verify the chain
console.log(prof instanceof Professor); // true
console.log(prof instanceof Faculty);   // true
console.log(prof instanceof Person);    // true
// Chain: prof -> Professor.prototype -> Faculty.prototype -> Person.prototype -> Object.prototype -> null