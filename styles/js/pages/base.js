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
/* Toggle sidebar on mobile
======================================================================= */
document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menuBtn");
  const mobileSidebar = document.getElementById("mobileSidebar");
  const overlay = document.getElementById("sidebarOverlay");

  // Main interaction handler to toggle menu states
  const toggleMenu = () => {
    menuBtn.classList.toggle("open");
    mobileSidebar.classList.toggle("active");
    overlay.classList.toggle("active");
    
    // Prevent background document scrolling when menu panel is active
    document.body.style.overflow = mobileSidebar.classList.contains("active") ? "hidden" : "";
  };

  // Bind actions to both the hamburger icon and backdrop region
  menuBtn.addEventListener("click", toggleMenu);
  overlay.addEventListener("click", toggleMenu);
});
