const cards = document.querySelectorAll('.region-card');

cards.forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('scaled');
    });
});