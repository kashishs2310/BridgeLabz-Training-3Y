const productName = "  wireless headphones PRO  ";

const cleaned = productName.trim().toLowerCase();

const capitalized = cleaned
  .split(" ")
  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");

const finalTitle = capitalized.replace("Pro", "Pro Edition");

console.log("Original :", `"${productName}"`);
console.log("Cleaned  :", `"${finalTitle}"`);
console.log("Length   :", finalTitle.length);