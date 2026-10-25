// Q9: Shopping Cart Total (Classes + RegExp for Coupon)

class Cart {
  constructor() {
    this.items = [];
    this.discountPercent = 0;
  }

  // Add an item with name, price and quantity
  addItem(name, price, quantity) {
    this.items.push({ name, price, quantity });
  }

  // Total before any discount
  getTotal() {
    return this.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  // Coupon format: SAVE or DISC followed by 2 digits, e.g. SAVE20, DISC10
  applyCoupon(code) {
    const match = /^(SAVE|DISC)(\d{2})$/.exec(code.trim().toUpperCase());
    if (!match) {
      console.log(`Invalid coupon "${code}". Use a format like SAVE20 or DISC10.`);
      return false;
    }
    this.discountPercent = Number(match[2]); // the digits are the % discount
    console.log(`Coupon ${match[0]} applied: ${this.discountPercent}% off.`);
    return true;
  }

  // Total after applying the coupon discount
  getFinalTotal() {
    const total = this.getTotal();
    return total - (total * this.discountPercent) / 100;
  }
}

// ---- Demo ----
const cart = new Cart();
cart.addItem("Notebook", 120, 3);
cart.addItem("Pen", 20, 5);
cart.addItem("Backpack", 1500, 1);

console.log("Total:", cart.getTotal());

cart.applyCoupon("HELLO");     // invalid
cart.applyCoupon("SAVE20");    // valid -> 20% off

console.log("Final total:", cart.getFinalTotal());