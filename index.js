let allPlants = [];  
let total = 0; 


const loadData = () => {
  fetch("https://openapi.programming-hero.com/api/plants")
    .then(res => res.json())
    .then(data => {
        allPlants = data.plants;
        displayPlant(allPlants);
    })
    .catch(err => console.error(err));
};


const displayPlant = (plants) => {
  const div_id = document.getElementById("div-id");
  div_id.innerHTML = "";

  for (let plant of plants) {
    const btnDiv = document.createElement("div");
    btnDiv.className = "p-4 grid md:grid-col-3 grid-col-1   border rounded-lg bg-white shadow-md cursor-pointer";

    btnDiv.innerHTML = `
        <div class="flex flex-col h-[600px]">
            <img class="h-[300px] w-full object-cover rounded-xl" src="${plant.image}">
            <h2 class="text-xl mt-4 font-semibold mb-2">${plant.name}</h2>
            <p class="h-[100px] mb-4">${plant.description}</p>
            <div class="flex justify-between mt-8 mb-4">
                <p class="bg-green-200 text-green-700 rounded-xl p-2 font-medium">${plant.category}</p>
                <p class="mb-2 font-bold">৳${plant.price}</p>
            </div>
            <button class="add-to-cart bg-green-500 text-2xl font-medium rounded-2xl text-center p-3 w-full hover:bg-yellow-400">
                Add to Cart
            </button>
        </div>
    `;

    const cardContent = btnDiv.querySelector("div.flex");
    const addButton = btnDiv.querySelector(".add-to-cart");

 
    cardContent.addEventListener("click", (e) => {
      if (!e.target.classList.contains("add-to-cart")) {
        openModal(plant);
      }
    });

    
    addButton.addEventListener("click", () => {
      alert(`"${plant.name}" has been added to your cart!`);
      addToCart(plant);
    });

    div_id.append(btnDiv);
  }
};

// Add item to Cart
const addToCart = (plant) => {
  const cartItems = document.getElementById("cartItems");

  const itemDiv = document.createElement("div");
  itemDiv.className = "flex justify-between items-center bg-green-100 p-2 rounded-lg shadow-sm";
  itemDiv.innerHTML = `
    <span class="font-medium">${plant.name}</span>
    <span class="font-bold">৳${plant.price}</span>
    <button class="remove-item ml-2 text-red-500 font-bold">&times;</button>
  `;

  // Append item
  cartItems.appendChild(itemDiv);

  // Update total
  total += parseFloat(plant.price);
  updateTotal();

  // Remove item on cross click
  const removeBtn = itemDiv.querySelector(".remove-item");
  removeBtn.addEventListener("click", () => {
    total -= parseFloat(plant.price); // Update total
    updateTotal();
    itemDiv.remove();
  });
};

// Update total
const updateTotal = () => {
  document.getElementById("totalPrice").innerText = `৳${total}`;
};

// Filter Plants
const filterPlantsByCategory = (categoryName) => {
  if (categoryName === "All") {
    displayPlant(allPlants);
  } else {
    const filtered = allPlants.filter(p => p.category === categoryName);
    displayPlant(filtered);
  }
};

// Modal functions
const openModal = (plant) => {
  document.getElementById("modalImage").src = plant.image;
  document.getElementById("modalName").innerText = plant.name;
  document.getElementById("modalDescription").innerText = plant.description;
  document.getElementById("modalCategory").innerText = `Category: ${plant.category}`;
  document.getElementById("modalPrice").innerText = `৳${plant.price}`;
  
  document.getElementById("plantModal").classList.remove("hidden");
};

const closeModal = () => {
  document.getElementById("plantModal").classList.add("hidden");
};

// Close modal when clicking outside modal content
document.getElementById("plantModal").addEventListener("click", (e) => {
  if (e.target.id === "plantModal") closeModal();
});

// Initial load
loadData();
