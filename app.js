// Initialize Icons
lucide.createIcons();

// Data arrays mimicking the premium content from the video
const services = [
    { 
        title: "Electrical Installations", 
        desc: "End-to-end electrical installations engineered to global standards.", 
        icon: "zap" 
    },
    { 
        title: "House Wiring", 
        desc: "Neat, code-compliant residential wiring for new builds, renovations and rewiring projects.", 
        icon: "home" 
    },
    { 
        title: "Commercial & Industrial Wiring", 
        desc: "Heavy-duty wiring for offices, warehouses, factories and retail spaces — designed to scale.", 
        icon: "factory" 
    },
    { 
        title: "Solar System Installation", 
        desc: "Grid-tie and off-grid solar systems sized for your load, with quality panels and batteries.", 
        icon: "sun" 
    },
    { 
        title: "Generator Installation", 
        desc: "Generator supply, installation, ATS wiring and load balancing for uninterrupted power.", 
        icon: "battery-charging" 
    }
];

const features = [
    { title: "Qualified Electrical Engineer", desc: "Trained, certified and continuously upskilling on modern electrical standards.", icon: "check-circle-2" },
    { title: "Fast Response", desc: "Same-day callouts in Kampala and quick response across Uganda.", icon: "clock" },
    { title: "Quality Workmanship", desc: "Neat, tested installations built to last using trusted materials and fittings.", icon: "award" },
    { title: "Safety First", desc: "Every job follows strict safety protocols to protect your family and property.", icon: "shield" },
    { title: "Honest & Reliable", desc: "We do what we promise, when we promise — and stand behind every connection.", icon: "heart" }
];

const gallery = [
    { title: "Residential Solar System", tag: "SOLAR", img: "https://images.unsplash.com/photo-1509391366360-12046cb74cb1?q=80&w=800&auto=format&fit=crop" },
    { title: "Distribution Board Install", tag: "INDUSTRIAL", img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=800&auto=format&fit=crop" },
    { title: "Premium Home Lighting", tag: "LIGHTING", img: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?q=80&w=800&auto=format&fit=crop" },
    { title: "Socket & Outlet Wiring", tag: "REPAIRS", img: "https://images.unsplash.com/photo-1558222218-b7b54eede3f3?q=80&w=800&auto=format&fit=crop" }
];

// Inject Services
const servicesContainer = document.getElementById('services-container');
services.forEach(service => {
    servicesContainer.innerHTML += `
        <div class="service-card">
            <div class="service-icon-box">
                <i data-lucide="${service.icon}"></i>
            </div>
            <h3>${service.title}</h3>
            <p>${service.desc}</p>
        </div>
    `;
});

// Inject Features
const featuresContainer = document.getElementById('features-container');
features.forEach(feature => {
    featuresContainer.innerHTML += `
        <div class="feature-card">
            <div class="feature-icon">
                <i data-lucide="${feature.icon}"></i>
            </div>
            <h3>${feature.title}</h3>
            <p>${feature.desc}</p>
        </div>
    `;
});

// Inject Gallery
const galleryContainer = document.getElementById('gallery-container');
gallery.forEach(item => {
    galleryContainer.innerHTML += `
        <div class="gallery-card">
            <img src="${item.img}" alt="${item.title}">
            <div class="gallery-title">${item.title}</div>
            <div class="gallery-tag">${item.tag}</div>
        </div>
    `;
});

// Re-initialize icons for dynamically injected content
lucide.createIcons();
