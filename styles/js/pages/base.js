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
document.addEventListener('DOMContentLoaded', function() {
  // Get the hash from the URL
  const hash = window.location.hash;

  // Check if a hash exists and is not empty
  if (hash) {
    // Remove the '#' from the hash to get the element ID
    const targetId = hash.substring(1);

    // Find the element with the matching ID
    const targetElement = document.getElementById(targetId);

    // If the element is found, scroll to it
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth', // For smooth scrolling
        block: 'start' // Aligns the top of the element with the top of the viewport
      });
    }
  }
});

  
});
