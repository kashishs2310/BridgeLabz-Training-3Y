// Q9: Person -> Student using prototypes AND ES6 classes

// ---------- Version 1: Prototype-based ----------
function PersonProto(name) {
  this.name = name;
}
PersonProto.prototype.printName = function () {
  console.log(`Name: ${this.name}`);
};

function StudentProto(name, branch) {
  PersonProto.call(this, name);
  this.branch = branch;
}
StudentProto.prototype = Object.create(PersonProto.prototype);
StudentProto.prototype.constructor = StudentProto;
StudentProto.prototype.printBranch = function () {
  console.log(`Branch: ${this.branch}`);
};

// ---------- Version 2: ES6 classes ----------
class PersonClass {
  constructor(name) {
    this.name = name;
  }
  printName() {
    console.log(`Name: ${this.name}`);
  }
}

class StudentClass extends PersonClass {
  constructor(name, branch) {
    super(name); // calls the parent constructor
    this.branch = branch;
  }
  printBranch() {
    console.log(`Branch: ${this.branch}`);
  }
}

// ---------- Demonstration ----------
const s1 = new StudentProto("Kashish", "Computer Science");
const s2 = new StudentClass("Kashish", "Computer Science");

console.log("--- Prototype version ---");
s1.printName();
s1.printBranch();

console.log("--- Class version ---");
s2.printName();
s2.printBranch();

// Both versions behave the same
console.log("--- Comparison ---");
console.log(s1 instanceof PersonProto);                                            // true
console.log(s2 instanceof PersonClass);                                            // true
console.log(Object.getPrototypeOf(StudentProto.prototype) === PersonProto.prototype); // true
console.log(Object.getPrototypeOf(StudentClass.prototype) === PersonClass.prototype); // true
console.log(s1.hasOwnProperty("printName"), s2.hasOwnProperty("printName"));       // false false (methods live on the prototype)
console.log(typeof PersonClass);                                                    // "function" (classes are syntactic sugar over prototypes)