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
/* Active Classes Fix
======================================================================= */
window.addEventListener('DOMContentLoaded', () => {
    // Find all Bootstrap tab links on the page
    const tabs = document.querySelectorAll('.nav-link[data-toggle="pill"]');
    if (!tabs.length) return; // No tabs → do nothing

    const hash = location.hash.replace('#', '');

    // Check if the hash matches a real tab-pane
    const tabPane = document.getElementById(hash);

    if (tabPane && tabPane.classList.contains('tab-pane')) {
        // Hash matches a tab → activate it
        $('.nav-link[href="#' + hash + '"]').tab('show');
    } else {
        // Hash does NOT match a tab → restore the default tab
        const defaultTab = document.querySelector('.nav-link.active') || tabs[0];
        if (defaultTab) $(defaultTab).tab('show');
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
    bottom: "10px",
    right: "10px",
    zIndex: "99999",
    border: "none",
    outline: "none",
    backgroundColor: "#333",
    color: "white",
    padding: "15px",
    borderRadius: "50%",
    fontSize: "32px",
    opacity: "0",          // start invisible
    pointerEvents: "none", // prevent clicking while hidden
    transition: "opacity 0.3s ease-in-out",
    width: "50px",
    height: "50px",
    lineHeight: "0px",     // vertically centers the arrow
    boxShadow: "0px 4px 6px rgba(0,0,0,0.5)"
  });

  // 3. Show button when user scrolls down 300px
  window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 300) {
    topBtn.style.opacity = "1";
    topBtn.style.pointerEvents = "auto";
  } else {
    topBtn.style.opacity = "0";
    topBtn.style.pointerEvents = "none";
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

/* ==================================================================== */
/* Pull Out Sidebar
======================================================================= */
const sidebarToggle = document.getElementById('sidebarToggle');
const sidebar = document.getElementById('sidebar');

sidebarToggle.addEventListener('click', () => {
    sidebar.classList.toggle('open');
});
