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
/* Scroll to the hashtag elements automatically when visiting via address bar
======================================================================= */
const element = document.getElementById("permissions");
element.scrollIntoView({
  behavior: 'smooth',  
});

/* ==================================================================== */
/* Scroll into view codes end
======================================================================= */  
});
