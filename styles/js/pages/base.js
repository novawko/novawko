/* ==================================================================== */
/* Import Utilities
======================================================================= */
import { charadex } from '../utilities.js';

/* ==================================================================== */
/* Core Load Handler (Handles Everything)
======================================================================= */
document.addEventListener("DOMContentLoaded", () => {
  // 1. Start loading your page data
  charadex.tools.loadIncludedFiles();
  charadex.tools.updateMeta();
  charadex.tools.loadPage('#charadex-body', 100);
  charadex.tools.loadPage('#main-container', 100);
  
  // 2. Wait until Charadex has definitely injected the HTML (using a small buffer)
  setTimeout(() => {
    const hash = window.location.hash;

    if (hash) {
      // Find the element target (whether it's a section or a tab pane)
      const target = document.querySelector(hash);

      if (target) {
        // --- Handle Bootstrap Navtabs ---
        if (target.classList.contains('tab-pane') || $(hash).parents('.tab-content').length) {
          $('.tab-pane').removeClass('active in'); // Reset all tabs
          $(hash).addClass('active in');           // Activate target tab
          $(`a[href="${hash}"]`).tab('show');      // Tell Bootstrap to show it
        }

        // --- Handle Smooth Scrolling ---
        // Give Bootstrap a split-second to display the tab before scrolling to it
        setTimeout(() => {
          target.scrollIntoView({ behavior: "auto", block: "start" });
        }, 50);
      }
    }
  }, 250); // 250ms gives Charadex (which has a 100ms internal delay) plenty of time to finish rendering
});
