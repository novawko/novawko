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
/* Scroll to them IDs automatically when clicked
======================================================================= */
function hashLinkScroll() {
  const hash = window.location.hash;
  if (hash !== "") {
    // Push onto callback queue so it runs after the DOM is updated,
    // this is required when navigating from a different page so that
    // the element is rendered on the page before trying to getElementById.
    setTimeout(() => {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element && element.scrollIntoView) {
        element.scrollIntoView();
      }
    }, 0);
  }
}
  
  
});
