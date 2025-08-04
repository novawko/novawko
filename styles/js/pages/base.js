/* ==================================================================== */
/* Import Utilities
======================================================================= */
import { charadex } from '../utilities.js';

/* ==================================================================== */
/* Load
======================================================================= */
document.addEventListener("DOMContentLoaded", () => {
  charadex.tools.loadIncludedFiles();
  charadex.tools.updateMeta();
  charadex.tools.loadPage('#charadex-body', 100);

/* ==================================================================== */
/* Scroll to the hashtag elements automatically when visiting via address bar
======================================================================= */
window.addEventListener('load', () => {
  // Get the hash from the URL
  const hash = window.location.hash;

  // Check if a hash exists and if an element with that ID exists
  if (hash) {
    const targetElement = document.querySelector(hash); // Selects by ID (e.g., #section-id)

    if (targetElement) {
      // Option 1: Instant scroll
      // targetElement.scrollIntoView(); 

      // Option 2: Smooth scroll
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' }); 
    }
  }
});

  
});
