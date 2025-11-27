// 1. HAMBURGER MENI
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-links");

if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });
    
    // Zatvaranje menija na klik
    document.querySelectorAll(".nav-links a").forEach(n => n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }));
}

// 2. NAPREDNA ANIMACIJA (SCROLL REVEAL)
const observerOptions = {
    threshold: 0.15 // Animacija kreće kad je 15% elementa vidljivo
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active'); // Dodaje klasu koja pokreće CSS
        }
    });
}, observerOptions);

// Pronađi sve elemente koji imaju klasu 'reveal'
const revealElements = document.querySelectorAll('.reveal');
revealElements.forEach((el) => observer.observe(el));
