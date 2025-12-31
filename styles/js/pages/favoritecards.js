/* ==================================================================== */
/* Import Charadex
======================================================================= */
import { charadex } from '../charadex.js';


/* ==================================================================== */
/* Load
======================================================================= */
document.addEventListener("DOMContentLoaded", async () => {
  let dex = await charadex.initialize.page(null, charadex.page.favoriteCards);
  charadex.tools.loadPage('.softload', 0);
});

/* ==================================================================== */
/* Flipping Card
======================================================================= */
// Select the card element
const card = document.querySelector('.flip-card-inner');

// Add a click event listener
card.addEventListener('click', function() {
  // Toggle the 'is-flipped' class
  card.classList.toggle('is-flipped');
});
