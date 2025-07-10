function updateCardHeight(card) {
  const cardInner = card.querySelector('.card-inner');
  const front = card.querySelector('.card-front');
  const back = card.querySelector('.card-back');

  // Temporarily reset transform so scrollHeight is accurate
  cardInner.style.transform = 'none';

  // Measure front and back heights
  const frontHeight = front.scrollHeight;
  const backHeight = back.scrollHeight;

  // Use the maximum height so both sides fit without overflow
  const maxHeight = card.classList.contains('flipped') ? backHeight : frontHeight;
  cardInner.style.height = maxHeight + 'px';

  // Restore transform depending on flipped state
  if (card.classList.contains('flipped')) {
    cardInner.style.transform = 'rotateY(180deg)';
  } else {
    cardInner.style.transform = '';
  }
}

// Add click listeners to all flip buttons (front and back)
document.querySelectorAll('.flip-button, .flip-back-button').forEach(button => {
  button.addEventListener('click', () => {
    const card = button.closest('.card');
    card.classList.toggle('flipped');
    updateCardHeight(card);
  });
});

// On initial load, set height for all cards
document.querySelectorAll('.card').forEach(card => {
  updateCardHeight(card);
});
