/* ==================================================================== */
/* Import Charadex
======================================================================= */
import { charadex } from '../charadex.js';


/* ==================================================================== */
/* Load
======================================================================= */
document.addEventListener("DOMContentLoaded", async () => {

  let dex = await charadex.initialize.page(
    null, 
    charadex.page.myCards, 
    (arr) => {
      for (let entry of arr) {

        // Make the tags pretty and actually work
        entry.tags = entry.tags ? entry.tags.split(',') : [];
        let fancyTagArr = [];
        if (entry.tags.length >= 1) {
          for (let tag of entry.tags) {
            fancyTagArr.push(`<a href="${charadex.url.addUrlParameters(charadex.url.getPageUrl(charadex.page.imageGallery.sitePage), {tags: tag})}">#${tag.trim()}</a>`);
          }
        }
        entry.fancytags = fancyTagArr.join(' ');

      }
    }
  );

  charadex.tools.loadPage('.softload', 500);

});
