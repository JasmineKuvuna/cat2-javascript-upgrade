const products = [
  { name: "Kienyeji Kuku", image: "images/kienyeji.jpg", description: "Our Kienyeji Kuku are raised with care, ensuring the highest quality meat and eggs", price: "Ksh 700 to Ksh 1000" },
  { name: "Broilers Chicken", image: "images/broilers.jpg", description: "The meat from the Broilers Chicken is tender and flavorful, perfect for a variety of dishes", price: "Ksh 550 per kg" },
  { name: "Layers Chicken", image: "images/layers.jpg", description: "The brown and white eggs from our Layers Chicken are well known for their quality and taste", price: "Ksh 300 per kg" },
  { name: "Pigs", image: "images/pigs.jpg", description: "Our pigs are raised in a clean and healthy environment, ensuring the best quality pork for our customers", price: "Ksh 500 per kg" }
];

const productGrid = document.querySelector("#productGrid");

products.forEach((product) => {
  const card = document.createElement("div");
  card.className = "product-card";
  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}"/>
    <h3>${product.name}</h3>
    <p>${product.description}</p>
    <span class="price">${product.price}</span>
    <a href="#get-in-touch" class="btn btn-small">Order Now</a>
  `;
  productGrid.appendChild(card);
});
    