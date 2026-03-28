// Animación suave al hacer scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Efecto de parpadeo en el título
setInterval(() => {
    const title = document.querySelector(".title");
    title.style.textShadow = `0 0 ${Math.random() * 40}px #ff0000`;
}, 200);
