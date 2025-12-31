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
var biggercardimages = document.querySelectorAll('.biggercardimage');

[...biggercardimages].forEach((biggercardimage)=>{
  biggercardimage.addEventListener( 'click', function() {
    biggercardimage.classList.toggle('is-flipped');
  });
});
