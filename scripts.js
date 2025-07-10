// Flip card logic (unchanged)
function updateCardHeight(card) {
  const cardInner = card.querySelector('.card-inner');
  const front = card.querySelector('.card-front');
  const back = card.querySelector('.card-back');

  cardInner.style.transform = 'none';

  const frontHeight = front.scrollHeight;
  const backHeight = back.scrollHeight;
  const maxHeight = card.classList.contains('flipped') ? backHeight : frontHeight;

  cardInner.style.height = maxHeight + 'px';

  if (card.classList.contains('flipped')) {
    cardInner.style.transform = 'rotateY(180deg)';
  } else {
    cardInner.style.transform = '';
  }
}

document.querySelectorAll('.flip-button, .flip-back-button').forEach(button => {
  button.addEventListener('click', () => {
    const card = button.closest('.card');
    card.classList.toggle('flipped');
    updateCardHeight(card);
  });
});

document.querySelectorAll('.card').forEach(card => {
  updateCardHeight(card);
});

// Reset form on back/refresh after submission
window.addEventListener('pageshow', function (event) {
  // Check if back/forward navigation occurred
  const navType = performance.getEntriesByType("navigation")[0]?.type;

  if (event.persisted || navType === "back_forward") {
    const form = document.querySelector('form');
    if (form) {
      form.reset();
      alert('Form reset.');
    }
  }
});
