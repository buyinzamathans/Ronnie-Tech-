// Initialize Icons
lucide.createIcons();

// The WhatsApp Engine
const waNumber = "256772901734";

function generateWALink(itemName, type) {
    let message = "";
    if (type === "product") {
        message = `Hello Ronnie Tech! I am interested in buying the *${itemName}* from your shop. Is it in stock?`;
    } else if (type === "service") {
        message = `Hello Ronnie! I would like to inquire about booking your *${itemName}* service.`;
    }
    return `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;
}

// Database (No Solar, Focused on Core Wiring & Shop)
const products = [
    { id: 1, name: "Extension Cable (5m)", category: "Accessories", desc: "Heavy duty 5-meter extension block with surge protection.", price: "35,000" },
    { id: 2, name: "LED Ceiling Panel", category: "Lighting", desc: "Energy-saving 18W LED panel, daylight white.", price: "25,000" },
    { id: 3, name: "Smart Socket (WiFi)", category: "Smart Home", desc: "Control your appliances from your phone.", price: "45,000" },
    { id: 4, name: "Circuit Breaker (32A)", category: "Hardware", desc: "High quality main circuit breaker for home distribution boards.", price: "18,000" }
];

const services = [
    { id: 1, name: "House Wiring", desc: "Neat, code-compliant residential wiring for new builds, renovations and rewiring projects.", price: "Quote on Request", icon: "home" },
    { id: 2, name: "Fault Tracing & Repair", desc: "Experiencing power trips? We diagnose and fix electrical faults fast.", price: "From Ushs 50,000", icon: "search" },
    { id: 3, name: "Appliance Installation", desc: "Safe installation of cookers, washing machines, and water heaters.", price: "From Ushs 80,000", icon: "plug" },
    { id: 4, name: "Commercial Wiring", desc: "Heavy-duty wiring for offices and retail spaces — designed to scale.", price: "Quote on Request", icon: "briefcase" }
];

// Reusable Render Functions
function createProductCard(product) {
    return `
        <div class="card">
            <div>
                <h3 class="card-title">${product.name}</h3>
                <span class="badge">${product.category}</span>
                <p class="card-desc">${product.desc}</p>
                <div class="card-price">Ushs ${product.price}</div>
            </div>
            <a href="${generateWALink(product.name, 'product')}" target="_blank" class="btn btn-primary w-100">
                <i data-lucide="message-circle" size="18"></i> Order Now
            </a>
        </div>
    `;
}

function createServiceCard(service) {
    return `
        <div class="card">
            <div>
                <div class="card-icon-box"><i data-lucide="${service.icon}"></i></div>
                <h3 class="card-title">${service.name}</h3>
                <p class="card-desc">${service.desc}</p>
                <div class="card-price">${service.price}</div>
            </div>
            <a href="${generateWALink(service.name, 'service')}" target="_blank" class="btn btn-outline w-100">
                <i data-lucide="calendar" size="18"></i> Book Service
            </a>
        </div>
    `;
}

// Route Injectors based on which page is active
const featuredServicesContainer = document.getElementById("featured-services");
if (featuredServicesContainer) {
    // Inject only top 2 for homepage to keep it uncrowded
    services.slice(0, 2).forEach(service => featuredServicesContainer.innerHTML += createServiceCard(service));
}

const featuredProductsContainer = document.getElementById("featured-products");
if (featuredProductsContainer) {
    // Inject only top 2 for homepage
    products.slice(0, 2).forEach(product => featuredProductsContainer.innerHTML += createProductCard(product));
}

const allServicesContainer = document.getElementById("all-services");
if (allServicesContainer) {
    services.forEach(service => allServicesContainer.innerHTML += createServiceCard(service));
}

const allProductsContainer = document.getElementById("all-products");
if (allProductsContainer) {
    products.forEach(product => allProductsContainer.innerHTML += createProductCard(product));
}

// Re-initialize icons for newly injected HTML
lucide.createIcons();
