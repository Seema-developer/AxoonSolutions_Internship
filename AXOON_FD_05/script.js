// hamburger on small devices
const hamburger = document.getElementById('hamburger');
const responsivenav = document.querySelector('.responsive-nav');
const navLinks = document.querySelectorAll('.responsive-nav a');

// Toggle nav (open/close)
hamburger.addEventListener('click', function () {
    responsivenav.classList.toggle('show');
    responsivenav.style.top = '0'; // Always from top (no scroll effect)
});

// Close nav when any link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', function () {
        responsivenav.classList.remove('show');
    });
});

// cards scrolling animation (project cards)
window.addEventListener("scroll", () => {
    const cards = document.querySelectorAll(".project-card");

    cards.forEach((card, index) => {
        const top = card.getBoundingClientRect().top;
        const isVisible = top < window.innerHeight - 100;

        if (isVisible && !card.classList.contains("animate")) {
            setTimeout(() => {
                card.classList.add("animate");
            }, index * 200);
        }
    });
});

// for expertise cards
window.addEventListener("scroll", () => {
    const cards = document.querySelectorAll(".expertise-card");

    cards.forEach((card, index) => {
        const top = card.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (top < screenHeight - 100) {
            setTimeout(() => {
                card.classList.add("animate");
            }, index * 200);
        }
    });
});
