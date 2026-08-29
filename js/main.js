const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

const menuLinks = navLinks.querySelectorAll("a");

menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

const serviceCards = document.querySelectorAll("[data-service]");

serviceCards.forEach((card) => {
    card.addEventListener("click", (event) => {

        if (event.target.closest("a")) {
            return;
        }

        serviceCards.forEach((otherCard) => {
            if (otherCard !== card) {
                otherCard.classList.remove("active");
            }
        });

        card.classList.toggle("active");
    });
});