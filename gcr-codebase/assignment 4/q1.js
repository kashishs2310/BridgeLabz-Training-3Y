// Q1: E-Commerce Product Manager (Classes + Objects)

class Product {
  constructor(id, name, price, category) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.category = category;
  }

  // Reduce price by the given percentage (e.g. 10 => 10% off)
  applyDiscount(percent) {
    this.price = this.price - (this.price * percent) / 100;
  }

  // Return a formatted string of the product details
  getDetails() {
    return `#${this.id} | ${this.name} | ${this.category} | Rs. ${this.price.toFixed(2)}`;
  }
}

// Create multiple products and store them in an array
const products = [
  new Product(1, "Laptop", 55000, "Electronics"),
  new Product(2, "Mouse", 599, "Accessories"),
  new Product(3, "Keyboard", 1499, "Accessories"),
  new Product(4, "Smartphone", 18999, "Electronics"),
  new Product(5, "USB Cable", 199, "Accessories"),
];

console.log("All products:");
products.forEach((p) => console.log(p.getDetails()));

// Apply 10% discount to the first product
products[0].applyDiscount(10);
console.log("\nAfter 10% discount on product 1:");
console.log(products[0].getDetails());

// Filter products with price > 1000
const expensiveProducts = products.filter((p) => p.price > 1000);
console.log("\nProducts with price > 1000:");
expensiveProducts.forEach((p) => console.log(p.getDetails()));