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
/* Clean the weird encoded ampersands to display links nicer
======================================================================= */
document.addEventListener("DOMContentLoaded", function() {
    // Select all anchor tags
    var links = document.querySelectorAll('a');
    
    links.forEach(function(link) {
        var href = link.getAttribute('href');
        if (href) {
            // Replace "%26" with "&" or completely remove specific unwanted parts
            var cleanedHref = href.replace(/%26/g, ''); 
            
            // Update the link
            link.setAttribute('href', cleanedHref);
        }
    });
});
