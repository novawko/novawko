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
});

/* ==================================================================== */
/* Scroll to a header with an ID automatically when visited
======================================================================= */
// Get the hash from the URL (e.g., "#mySection")
const hash = window.location.hash;

// Check if a hash exists
if (hash) {
  // Remove the '#' to get the element ID
  const targetId = hash.substring(1);

  // Find the element by its ID
  const targetElement = document.getElementById(targetId);

  // If the element exists, scroll to it
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll
  }
}
});
