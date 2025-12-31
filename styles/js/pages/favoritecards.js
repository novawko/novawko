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
var wonkers = document.querySelectorAll('.wonker');

[...wonkers].forEach((wonker)=>{
  wonker.addEventListener( 'click', function() {
    wonker.classList.toggle('is-flipped');
  });
});
