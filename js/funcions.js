const menuBtn = document.getElementById("menuBtn");
const sideMenu = document.getElementById("sideMenu");
const closeMenu = document.getElementById("closeMenu");

menuBtn.addEventListener("click", () => {
  sideMenu.classList.add("active");
  
});

closeMenu.addEventListener("click", () => {
  sideMenu.classList.remove("active");
});

// ======================
// AGREGAR PRODUCTOS
// ======================
const addButtons = document.querySelectorAll(".add-cart");
const cartCount = document.getElementById("cartCount");
const cartSection = document.getElementById("cart");

let count = 0;

addButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        const product = e.target.closest(".products__item");
        const img = product.querySelector("img").src;
        const name = product.querySelector("h3").textContent;
        const price = product.querySelector("p").textContent;

        const item = document.createElement("div");
        item.innerHTML = `
            <img src="${img}">
            <p>${name}</p>
            <p>${price}</p>
            <img src="assets/borrar.svg" class="delete-icon">
        `;

        cartSection.appendChild(item);

        count++;
        cartCount.textContent = count;

        item.querySelector(".delete-icon").addEventListener("click", () => {
            item.remove();
            count--;
            cartCount.textContent = count;
        });
    });
});

// ======================
// ABRIR / CERRAR CARRITO
// ======================
const openCart = document.getElementById("openCart");
const closeCart = document.getElementById("closeCart");


openCart.addEventListener("click", () => {
    cartSection.classList.add("active");
    sideMenu.classList.remove("active");
});

closeCart.addEventListener("click", () => {
    cartSection.classList.remove("active");
});
