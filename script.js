// Product data
const products = {
    1: {
        name: "Nordic Table Lamp",
        price: "$89.99 CAD",
        model: "assets/1.glb",
        description: "This minimalist Nordic table lamp brings warmth and elegance to any space. Featuring clean lines and a timeless design, it's perfect for modern interiors. Hand-assembled in Toronto, Canada with premium materials."
    },
    2: {
        name: "Industrial Pendant",
        price: "$124.99 CAD",
        model: "assets/2.glb",
        description: "Bold industrial-style pendant lamp with exposed Edison bulb design. Features a powder-coated steel frame and vintage-inspired aesthetic. Perfect for lofts, kitchens, or dining areas. Crafted in Vancouver with attention to detail."
    },
    3: {
        name: "Ceramic Floor Lamp",
        price: "$149.99 CAD",
        model: "assets/3.glb",
        description: "Artisan-crafted ceramic floor lamp with natural finish. Each piece is unique, showcasing beautiful organic textures. Provides ambient lighting perfect for living rooms or bedrooms. Handmade in Montreal with sustainable practices."
    }
};

// Get product ID from URL
function getProductId() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id') || '1';
}

// Load product details
function loadProductDetails() {
    const productId = getProductId();
    const product = products[productId];
    
    if (product) {
        // Update product name
        document.getElementById('product-name').textContent = product.name;
        
        // Update price
        document.getElementById('product-price').textContent = product.price;
        document.querySelector('.btn-buy').textContent = `Add to Cart - ${product.price}`;
        
        // Update description
        document.getElementById('product-desc').textContent = product.description;
        
        // Update 3D model
        const modelViewer = document.getElementById('lamp-model');
        modelViewer.src = product.model;
        modelViewer.alt = product.name;
    }
}

// Run when page loads
if (window.location.pathname.includes('detail.html')) {
    window.addEventListener('load', loadProductDetails);
}

// Console message
console.log('✅ LuxeLamp website loaded!');
console.log('🖱️ Use mouse to interact with 3D models');
