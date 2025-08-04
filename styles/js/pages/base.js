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
/* Load IDs
======================================================================= */
// Get the button element
const button = document.getElementById("permissions");

// Get the target element
const targetSection = document.getElementById("permissions");

// Add a click event listener to the button
button.addEventListener("click", () => {
  // Scroll the target section into view
  targetSection.scrollIntoView({
    block: "start",   // Align the top of the element with the top of the viewport
  });
});
  
});
