const cart = [
  { item: "Laptop", category: "electronics", price: 45000 },
  { item: "Shoes", category: "fashion", price: 2500 },
  { item: "Book", category: "education", price: 600 }
];

const discountedItems = [];

for (let i = 0; i < cart.length; i++) {
  let discountedPrice = cart[i].price;

  if (cart[i].category === "electronics") {
    discountedPrice = cart[i].price * 0.90;
  } else if (cart[i].category === "fashion") {
    discountedPrice = cart[i].price * 0.95;
  }

  discountedItems.push({ item: cart[i].item, finalPrice: discountedPrice });
  console.log(`${cart[i].item}: ${cart[i].price} -> ${discountedPrice}`);
}

const total = discountedItems.reduce((sum, product) => sum + product.finalPrice, 0);
console.log("Total after category discounts:", total);

const originalTotal = cart.reduce((sum, product) => sum + product.price, 0);
let finalTotal = total;

if (originalTotal > 50000) {
  finalTotal = total * 0.95;
  console.log("Cart value above 50000 -> extra 5% discount applied");
}

console.log("Final total:", finalTotal);