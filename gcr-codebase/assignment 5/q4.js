// Q4: Constructor function with a shared prototype method

function Car(brand, model) {
  this.brand = brand; // own property (separate for each object)
  this.model = model;
}

// Method added to the prototype: stored ONCE and shared by all Car objects
Car.prototype.getDetails = function () {
  console.log(`Brand: ${this.brand}, Model: ${this.model}`);
};

const car1 = new Car("Toyota", "Fortuner");
const car2 = new Car("Hyundai", "Creta");

car1.getDetails(); // Brand: Toyota, Model: Fortuner
car2.getDetails(); // Brand: Hyundai, Model: Creta

// Proof of method sharing via the prototype:
console.log(car1.getDetails === car2.getDetails);                // true (same function in memory)
console.log(car1.hasOwnProperty("getDetails"));                  // false (not copied into the object)
console.log(Object.getPrototypeOf(car1) === Car.prototype);      // true