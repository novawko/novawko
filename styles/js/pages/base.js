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
/* Load the IDs into view when visited
======================================================================= */
  function myFunction() {
  const element = document.getElementById("permissions");
  element.scrollIntoView();
}
  
});
