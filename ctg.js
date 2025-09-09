
const category = () => {
    fetch("https://openapi.programming-hero.com/api/categories")
    .then(res => res.json())
    .then(data => { 
        displayCatagori(data.categories)
    })
    .catch(err => console.error("Error:", err));
}

const displayCatagori = (categories) => {
    const cata_id = document.getElementById("cata_id");
    cata_id.innerHTML = ""; 

    for (let category of categories) {
        const btnCtg = document.createElement("div");
        btnCtg.className = "p-2";

        btnCtg.innerHTML = `
            <button 
                class="ctg-btn cursor-pointer px-4 py-2 rounded-lg text-center text-xl bg-white text-black"
                data-category="${category.category_name}">
                ${category.category_name}
            </button>
        `;

        cata_id.appendChild(btnCtg);
    }

   
    const allBtns = document.querySelectorAll(".ctg-btn");
    allBtns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            

            allBtns.forEach(b => {
                b.classList.remove("bg-green-500", "text-white");
                b.classList.add("bg-white", "text-black");
            });

           
            e.target.classList.remove("bg-white", "text-black");
            e.target.classList.add("bg-green-500", "text-white");

            
            const selectedCategory = e.target.getAttribute("data-category");

            
            if (selectedCategory === "All") {
                displayPlant(allPlants); 
            } else {
                const filtered = allPlants.filter(p => p.category === selectedCategory);
                displayPlant(filtered);
            }
        });
    });
}

category();
