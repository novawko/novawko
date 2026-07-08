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
/* Load sidebar on mobile
======================================================================= */
const mobileSidebar = document.getElementById('mobile-sidebar');
const toggleBtn = document.getElementById('nav-mobile-menu-toggle');
const closeBtn = document.getElementById('mobile-sidebar-close');

// Function to open sidebar
function openMobileSidebar() {
  mobileSidebar.classList.add('active');
}

// Function to close sidebar
function closeMobileSidebar() {
  mobileSidebar.classList.remove('active');
}

// Event Listeners
toggleBtn.addEventListener('click', openMobileSidebar);
closeBtn.addEventListener('click', closeMobileSidebar);
