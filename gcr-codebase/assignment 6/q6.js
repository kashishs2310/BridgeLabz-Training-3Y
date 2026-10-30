// Q6 - E-Commerce Dashboard: Product Card Fetcher
// Works in Node.js 18+ (console logs) and in the browser (console + product cards).

const API_URL = "https://fakestoreapi.com/products";

async function fetchProducts() {
  try {
    const response = await fetch(API_URL);

    // fetch() does not throw on HTTP errors, so check manually
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const products = await response.json();

    // Log each product
    products.forEach((product) => {
      console.log(`Product: ${product.title}`);
      console.log(`Price: $${product.price}`);
      console.log(`Image: ${product.image}`);
      console.log("--------------------------");
    });

    // Bonus: build product cards only when running in a browser
    if (typeof document !== "undefined") {
      renderProductCards(products);
    }
  } catch (error) {
    console.error("Error:", error.message);
    console.log("Failed to load products. Please try again.");

    if (typeof document !== "undefined") {
      const msg = document.createElement("p");
      msg.textContent = "Failed to load products. Please try again.";
      msg.style.color = "red";
      document.body.appendChild(msg);
    }
  }
}

// Bonus: create HTML product cards dynamically with document.createElement()
function renderProductCards(products) {
  const heading = document.createElement("h1");
  heading.textContent = "Fake Store – Product Dashboard";
  heading.style.textAlign = "center";

  const container = document.createElement("div");
  container.style.cssText =
    "display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:16px;padding:16px;";

  products.forEach((product) => {
    const card = document.createElement("div");
    card.style.cssText =
      "background:#fff;border-radius:8px;box-shadow:0 1px 4px rgba(0,0,0,.2);padding:12px;text-align:center;";

    const img = document.createElement("img");
    img.src = product.image;
    img.alt = product.title;
    img.style.cssText = "height:120px;max-width:100%;object-fit:contain;";

    const title = document.createElement("h4");
    title.textContent = product.title;
    title.style.fontSize = "13px";

    const price = document.createElement("p");
    price.textContent = `$${product.price}`;
    price.style.cssText = "color:#007a5a;font-weight:bold;";

    card.append(img, title, price);
    container.appendChild(card);
  });

  document.body.append(heading, container);
}

fetchProducts();