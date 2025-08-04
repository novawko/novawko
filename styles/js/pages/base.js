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
window.addEventListener('load', function () {

	if (window.location.hash == '') {
		return false;
	}

	var el = document.querySelector(window.location.hash);

	if (el !== null) {

		el.scrollIntoView({ behavior: 'smooth' });

	}

}, false);

  
});
