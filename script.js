// Efecto de parallax suave en scroll
window.addEventListener("scroll", () => {
    const hero = document.querySelector(".hero");
    const offset = window.scrollY * 0.25;
    hero.style.backgroundPositionY = offset + "px";
});

// Animación de aparición al hacer scroll
const items = document.querySelectorAll(".news-item");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: 0.2 });

items.forEach(i => observer.observe(i));
