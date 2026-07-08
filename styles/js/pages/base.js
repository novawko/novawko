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
  charadex.tools.loadPage('#main-container', 100);
  
});

/* ==================================================================== */
/* Fixed Automatic Scroll
======================================================================= */
  window.addEventListener("load", () => {
    const hash = window.location.hash;
    if (hash) {
      const target = document.querySelector(hash);
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: "auto" });
        }, 100);
      }
    }
  });

/* ==================================================================== */
/* Load any specific navtabs
======================================================================= */
$(function() {
  var hash = window.location.hash;

  if (hash != '') {
    $('.tab-pane').removeClass('active in'); // Remove 'active' from all tab panes
    $(hash).addClass('active in'); // Add 'active' to the target tab pane
    $(`a[href="${hash}"]`).tab('show'); // Show the tab linked to the hash
  }
});

/* ==================================================================== */
/* Open any linked collapses
======================================================================= */
document.addEventListener('DOMContentLoaded', () => {
    // Grab the hash from the URL
    const hash = window.location.hash;
    
    if (hash) {
        // Find the trigger and the collapsible content (adjust selectors to your needs)
        const trigger = document.querySelector(`a[href="${hash}"]`);
        const targetElement = document.querySelector(hash);

        if (trigger && targetElement) {
            // Add 'active' class to the trigger
            trigger.classList.add('active');
            
            // If using standard JS/CSS collapses
            targetElement.classList.add('show'); 
            
            // If using Bootstrap (e.g., v5.3), initialize and show it
            if (typeof bootstrap !== 'undefined') {
                const bsCollapse = new bootstrap.Collapse(targetElement, {
                    toggle: false
                });
                bsCollapse.show();
            }
        }
    }
});
