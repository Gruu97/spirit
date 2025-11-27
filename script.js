// 1. HAMBURGER MENI LOGIKA
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-links");

if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

    // Zatvori meni na klik linka
    document.querySelectorAll(".nav-links a").forEach(n => n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }));
}

// 2. ADVANCED SCROLL ANIMACIJA (Intersection Observer)
// Podešavamo opcije: animacija kreće tek kad je 15% elementa vidljivo na ekranu
const observerOptions = {
    threshold: 0.15 
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        // Ako je element ušao u vidno polje
        if (entry.isIntersecting) {
            // Dodaj klasu koja pokreće CSS animaciju
            entry.target.classList.add('show');
            // Prestani da ga pratiš nakon što se jednom animira (bolje performanse)
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Pronađi sve elemente koji treba da se animiraju
const hiddenElements = document.querySelectorAll('.hidden, .zigzag-item, .card, .hero-content');
hiddenElements.forEach((el) => {
    // Dodaj im inicijalnu 'hidden' klasu ako je nemaju
    el.classList.add('hidden');
    // Počni posmatranje
    observer.observe(el);
});
