// Feature 1: Loop-rendered dynamic content
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
   
// Feature 2: Add and Remove order items
const addOrderBtn = document.querySelector("#addOrderBtn");
const orderItemInput = document.querySelector("#orderItemInput");
const orderList = document.querySelector("#orderList");

addOrderBtn.addEventListener("click", () => {
  const itemText = orderItemInput.value.trim();
  if (itemText == "") {
    return;
  }

    const li = document.createElement("li");
    li.textContent = itemText;

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.className = "btn btn-small";
    removeBtn.addEventListener("click", () => {
        li.remove();
    });

    li.appendChild(removeBtn);
    orderList.appendChild(li);

    orderItemInput.value = "";
});

// Feature 3: Form validation with feedback
const inquiryForm = document.querySelector("#inquiryForm");
const formFeedback = document.querySelector("#formFeedback");

inquiryForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.querySelector("#nameInput").value.trim();
    const product = document.querySelector("#productInput").value.trim();
    const quantity = document.querySelector("#quantityInput").value.trim();

    if (name === "" || product === "" || quantity === "") {
        formFeedback.textContent = "Please fill in all fields before submitting.";
        formFeedback.style.color = "red";
        return;
    }

    formFeedback.textContent = `Thanks ${name}, your inquiry for ${quantity} of ${product} has been noted. We'll reach you via Whatsapp or phone.`;
    formFeedback.style.color = "green";

    inquiryForm.reset();
});