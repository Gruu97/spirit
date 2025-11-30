// --- 1. NAVBAR SCROLL EFEKAT ---
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    // Ako smo skrolovali više od 100 piksela, dodaj zelenu boju
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// --- 2. HAMBURGER MENI (MOBILNI) ---
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

// --- 3. ANIMACIJE (SCROLL REVEAL) ---
const observerOptions = {
    threshold: 0.1 // Animacija kreće kad je 10% elementa vidljivo
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
