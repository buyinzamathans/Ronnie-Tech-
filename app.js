// Database for Shop Items
const products = [
    { id: 1, name: "Extension Cable (5m)", category: "Accessories", desc: "Heavy duty 5-meter extension block with surge protection.", price: "35,000" },
    { id: 2, name: "LED Ceiling Panel", category: "Lighting", desc: "Energy-saving 18W LED panel, daylight white.", price: "25,000" },
    { id: 3, name: "Smart Socket (WiFi)", category: "Smart Home", desc: "Control your appliances from your phone.", price: "45,000" },
    { id: 4, name: "Circuit Breaker (32A)", category: "Hardware", desc: "High quality main circuit breaker for home distribution boards.", price: "18,000" }
];

// Database for Services
const services = [
    { id: 1, name: "Full Home Wiring", desc: "Complete electrical piping and wiring for new residential buildings.", price: "Quote on Request" },
    { id: 2, name: "Fault Tracing & Repair", desc: "Experiencing power trips? We diagnose and fix electrical faults fast.", price: "From Ushs 50,000" },
    { id: 3, name: "Appliance Installation", desc: "Safe installation of cookers, washing machines, and water heaters.", price: "From Ushs 80,000" },
    { id: 4, name: "Security Light Setup", desc: "Installation of automated outdoor security and motion sensor lights.", price: "From Ushs 120,000" }
];

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

// Render Products
const productGrid = document.getElementById("product-grid");
if (productGrid) {
    products.forEach(product => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <div>
                <h3 class="card-title">${product.name}</h3>
                <span class="badge" style="font-size:0.8rem; background:#e2e8f0; padding:2px 8px; border-radius:10px; margin-bottom:10px; display:inline-block;">${product.category}</span>
                <p class="card-desc">${product.desc}</p>
                <div class="card-price">Ushs ${product.price}</div>
            </div>
            <a href="${generateWALink(product.name, 'product')}" target="_blank" class="btn wa-btn">Order via WhatsApp</a>
        `;
        productGrid.appendChild(card);
    });
}

// Render Services
const serviceGrid = document.getElementById("service-grid");
if (serviceGrid) {
    services.forEach(service => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <div>
                <h3 class="card-title">⚡ ${service.name}</h3>
                <p class="card-desc">${service.desc}</p>
                <div class="card-price">${service.price}</div>
            </div>
            <a href="${generateWALink(service.name, 'service')}" target="_blank" class="btn wa-btn">Book via WhatsApp</a>
        `;
        serviceGrid.appendChild(card);
    });
}
