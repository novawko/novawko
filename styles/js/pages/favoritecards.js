/* ==================================================================== */
/* Import Charadex
======================================================================= */
import { charadex } from '../charadex.js';


/* ==================================================================== */
/* Load
======================================================================= */
document.addEventListener("DOMContentLoaded", async () => {
  let dex = await charadex.initialize.page(null, charadex.page.favoriteCards);
  charadex.tools.loadPage('.softload', 500);
});

/* ==================================================================== */
/* Flipping Card
======================================================================= */
// Get a reference to the card element
const wonker = document.querySelector('.wonker');

// Add a click event listener
wonker.addEventListener('click', function () {
    // Toggle the 'is-flipped' class on each click
    wonker.classList.toggle('is-flipped');
});
