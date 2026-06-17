// Simple shopping cart functionality
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(productName, price) {
  cart.push({ name: productName, price: price });
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartDisplay();
  alert(`${productName} ajouté au panier !`);
}

function updateCartDisplay() {
  const cartCount = document.getElementById('cart-count');
  if (cartCount) {
    cartCount.textContent = cart.length;
  }
  console.log('Panier:', cart);
}

// Attach event listeners to "Ajouter au panier" buttons
document.addEventListener('DOMContentLoaded', function() {
  updateCartDisplay();
  const buttons = document.querySelectorAll('.btn-primary');
  buttons.forEach(button => {
    if (button.textContent.includes('Ajouter au panier')) {
      button.addEventListener('click', function(e) {
        e.preventDefault();
        const card = this.closest('.card');
        const title = card.querySelector('.card-title').textContent;
        const priceText = card.querySelector('.card-text strong').textContent;
        const price = parseFloat(priceText.replace(' €', ''));
        addToCart(title, price);
      });
    }
  });
});