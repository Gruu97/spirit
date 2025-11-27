// 1. HAMBURGER MENI (Mobilni)
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-links");

if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });
    
    // Zatvaranje menija na klik bilo kog linka
    document.querySelectorAll(".nav-links a").forEach(n => n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }));
}

// 2. NOVA ANIMACIJA (Rešava problem "Blank page")
const observerOptions = {
    threshold: 0.1 // Aktivira se čim se vidi 10% elementa
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // Dodaje klasu .active koja u CSS-u menja opacity sa 0 na 1
            entry.target.classList.add('active');
            // Prestaje da prati element nakon što ga jednom prikaže
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Pronalazi sve elemente sa klasom .reveal i aktivira posmatrača
const revealElements = document.querySelectorAll('.reveal');
revealElements.forEach((el) => observer.observe(el));
