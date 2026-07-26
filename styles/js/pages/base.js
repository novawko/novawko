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
/* Automatic Scroll
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
/* Copy to Clipboard
======================================================================= */
document.getElementById('copyBtn').addEventListener('click', function() {
    // 1. Retrieve the text directly from the data attribute
    const textToCopy = this.getAttribute('data-copy-text');
    
    // 2. Write to the system clipboard
    navigator.clipboard.writeText(textToCopy).then(() => {
        alert("Copied successfully!");
    }).catch(err => {
        console.error("Failed to copy text: ", err);
    });
});

/* ==================================================================== */
/* 1. Handle URL Hashes for Tabs / Pills
======================================================================= */
$(document).ready(function () {
  var hash = window.location.hash;
  if (hash) {
    var $targetTab = $('.nav-tabs a[href="' + hash + '"], .nav-pills a[href="' + hash + '"]');
    var $targetPane = $(hash);

    if ($targetTab.length && $targetPane.length) {
      $targetTab.closest('.nav').find('.nav-link, a').removeClass('active').attr('aria-selected', 'false');
      $targetPane.siblings('.tab-pane').removeClass('active show');

      $targetTab.addClass('active').attr('aria-selected', 'true');
      $targetPane.addClass('active show');
    }
  }
});

/* ==================================================================== */
/* 2. Handle URL Hashes for Collapses (Accordions/Cards)
======================================================================= */
document.addEventListener('DOMContentLoaded', () => {
  const hash = window.location.hash;
  
  if (hash) {
    const trigger = document.querySelector(`a[href="${hash}"]`);
    const targetElement = document.querySelector(hash);

    // Make sure this target is actually a collapse element before running collapse logic
    if (trigger && targetElement && targetElement.classList.contains('collapse')) {
      trigger.classList.add('active');
      targetElement.classList.add('show');
      
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
      behavior: "auto"
    });
  });
});

/* ==================================================================== */
/* Pop-Up
======================================================================= */
  const closeBtn = document.getElementById('close');
  const modalMenu = document.getElementById('modal');

  setTimeout(() => {
      modalMenu.classList.add('show');
  }, 500);

  closeBtn.addEventListener('click', () => { modalMenu.classList.remove('show') });
