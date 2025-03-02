// Initialize an empty cart
let cart = [];

// Wait for the DOM to load before adding event listeners
document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach((button) => {
        button.addEventListener('click', addToCart);
    });
});

// Function to add a product to the cart
function addToCart(event) {
    const productName = event.target.parentElement.querySelector('h3').innerText;
    const productPrice = event.target.parentElement.querySelector('p').innerText;

    const product = {
        name: productName,
        price: productPrice
    };

    cart.push(product);
    updateCartCount();
    updateCartModal();
}

// Function to update the cart count
function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    cartCount.innerText = cart.length;
}

// Function to update the cart modal
function updateCartModal() {
    const cartItemsList = document.getElementById('cart-items');
    cartItemsList.innerHTML = ''; // Clear existing cart items

    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.innerText = `${item.name} - ${item.price}`;
        cartItemsList.appendChild(listItem);
    });
}

// Function to display the cart modal
function showCart() {
    const cartModal = document.getElementById('cart-modal');
    cartModal.style.display = 'flex';
}

// Function to close the cart modal
function closeCart() {
    const cartModal = document.getElementById('cart-modal');
    cartModal.style.display = 'none';
}
