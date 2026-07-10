let cartCount = 0;

const cartNumber = document.getElementById("cart-count");
const buttons = document.querySelectorAll(".add-cart");


buttons.forEach(button => {

    button.addEventListener("click", () => {

        cartCount++;

        cartNumber.textContent = cartCount;

        button.innerHTML = "Added ✅";


        setTimeout(() => {

            button.innerHTML = "Add +";

        }, 2000);

    });

});