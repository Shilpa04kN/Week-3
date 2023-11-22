let cartCount = 0;
let cartItems = [];

function addToCart(productId) {
   
    let product = getProductById(productId);
    
    if (product) {
        cartCount++;
        document.getElementById('cart-count').innerText = cartCount;
        cartItems.push(product);
        updateCartIcon();
    }
}

function updateCartIcon() {
    console.log("Cart Updated:", cartItems);
}

function openCart() {

    document.getElementById('cart-modal').style.display = 'block';
    
   
    updateCartItems();
}

function closeCart() {
   
    document.getElementById('cart-modal').style.display = 'none';
}

function updateCartItems() {
    const cartItemsList = document.getElementById('cart-items-list');
    const cartTotal = document.getElementById('cart-total');
    
  
    cartItemsList.innerHTML = '';

  
    cartItems.forEach(item => {
        const li = document.createElement('li');
        li.innerText = `${item.name} - $${item.price.toFixed(2)}`;
        cartItemsList.appendChild(li);
    });


    const total = cartItems.reduce((sum, item) => sum + item.price, 0);
    cartTotal.innerText = total.toFixed(2);
}

function getProductById(productId) {
    const products = {
        1: { name: "Product 1", price: 19.99 },
        2: { name: "Product 2", price: 29.99 },
        3: { name: "Product 3", price: 49.99 },
        4: { name: "Product 4", price: 85.99 },
        5: { name: "Product 5", price: 500 },
        6: { name: "Product 6", price: 50 },
        7: { name: "Product 7", price: 80 },
        8: { name: "Product 8", price: 250 },
        9: { name: "Product 9", price: 30.99 },
        10: { name: "Product 10", price: 1000 },
    
    };

    return products[productId];
}
