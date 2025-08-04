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
window.onload = function() {
  if (window.location.hash) {
    // Get the ID from the hash, removing the '#'
    const targetId = window.location.hash.substring(1); 
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      // Scroll the element into view smoothly
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' }); 
    }
  }
};

  
});
