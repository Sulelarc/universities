const cards = document.querySelectorAll('.region-card');

cards.forEach(card => {
    card.addEventListener('click', () => {

        cards.forEach(otherCard => {
            if (otherCard !== card) {
                otherCard.classList.remove('scaled');
            }
        });

        card.classList.toggle('scaled');
    });
});