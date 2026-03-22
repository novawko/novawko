/* ==================================================================== */
/* Import Charadex
======================================================================= */
import { charadex } from '../charadex.js';


/* ==================================================================== */
/* Load
======================================================================= */
document.addEventListener("DOMContentLoaded", async () => {
  let dex = await charadex.initialize.page(null, charadex.page.commissions);
  charadex.tools.loadPage('.softload', 500);
});

/* ==================================================================== */
/* Remove the Broken Image Icons
======================================================================= */
const images = document.querySelectorAll('img');

images.forEach(img => {
  img.addEventListener('error', function handleError() {
    this.remove();
  });
});
