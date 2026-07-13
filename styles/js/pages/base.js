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

/* ==================================================================== */
/* Back To Top Button
======================================================================= */
document.addEventListener("DOMContentLoaded", () => {
  // 1. Create the button element dynamically
  const topBtn = document.createElement("button");
  topBtn.innerHTML = "&#8593;"; // Up arrow icon
  topBtn.setAttribute("id", "globalBackToTop");
  topBtn.setAttribute("title", "Go to top");
  document.body.appendChild(topBtn);

  // 2. Inline styles to keep it fixed in the corner
  Object.assign(topBtn.style, {
    position: "fixed",
    bottom: "30px",
    right: "30px",
    zIndex: "99999",
    border: "none",
    outline: "none",
    backgroundColor: "#333",
    color: "white",
    cursor: "pointer",
    padding: "15px",
    borderRadius: "50%",
    fontSize: "32px",
    display: "none", // Hidden by default
    transition: "opacity 0.3s ease-in-out",
    width: "50px",
    height: "50px",
    lineHeight: "0px", // vertically centers the arrow
    boxShadow: "0px 4px 6px rgba(0,0,0,0.5)"
  });

  // 3. Show button when user scrolls down 300px
  window.addEventListener("scroll", () => {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      topBtn.style.display = "block";
    } else {
      topBtn.style.display = "none";
    }
  });

  // 4. Smooth scroll back to the top on click
  topBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});
