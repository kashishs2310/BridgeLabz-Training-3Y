// Q5: Person -> Student inheritance using constructor functions

// Parent constructor
function Person(name) {
  this.name = name;
}

Person.prototype.printName = function () {
  console.log(`Name: ${this.name}`);
};

// Child constructor
function Student(name, branch) {
  Person.call(this, name); // borrow Person's constructor to set `name`
  this.branch = branch;
}

// Link the prototype chain: Student.prototype -> Person.prototype
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student; // restore the constructor reference

Student.prototype.printBranch = function () {
  console.log(`Branch: ${this.branch}`);
};

const student1 = new Student("Kashish", "Computer Science");

student1.printName();   // inherited from Person.prototype
student1.printBranch(); // from Student.prototype

// Demonstrate the prototype chain
console.log(student1 instanceof Student);                                   // true
console.log(student1 instanceof Person);                                    // true
console.log(Object.getPrototypeOf(student1) === Student.prototype);        // true
console.log(Object.getPrototypeOf(Student.prototype) === Person.prototype); // true
// Chain: student1 -> Student.prototype -> Person.prototype -> Object.prototype -> null