/* ==================================================================== */
/* Import Charadex
======================================================================= */
import {
   charadex
}

from '../charadex.js';


/* ==================================================================== */
/* Load
======================================================================= */
document.addEventListener("DOMContentLoaded", async () => {

   let dex = await charadex.initialize.page(null,
      charadex.page.characters,
      null,
      async (listData) => {

         if (listData.type == 'profile') {

            console.log(listData.profileArray[0]);

            // Create the log dex
            if (charadex.tools.checkArray(listData.profileArray[0].characterlog)) {
               let logs = await charadex.initialize.page(listData.profileArray[0].characterlog,
                  charadex.page.characters.relatedData['character log']);
            }

            // Create the image gallery
            if (charadex.tools.checkArray(listData.profileArray[0].imagegallery)) {
               let gallery = await charadex.initialize.page(listData.profileArray[0].imagegallery,
                  charadex.page.characters.relatedData['image gallery']);
            }

            // Make the tags pretty and actually work on profile pages
            const entry = listData.profileArray[0];

            if (entry.tags) {
               const rawTags = entry.tags
                  .split(',')
                  .map(t => t.trim())
                  .filter(t => t.length);

               entry.fancytags = rawTags.map(tag =>
                  `<a href="${charadex.url.addUrlParameters(
            charadex.url.getPageUrl(charadex.page.characters.sitePage),
            { tags: tag }
        )}">#${tag}</a>`
               ).join(' ');
            }

         }

      });

   charadex.tools.loadPage('.softload', 500);

});


/* ==================================================================== */
/* Load any specific navtabs
======================================================================= */
$(function () {
   var hash = window.location.hash;

   if (hash != '') {
      $('.tab-pane').removeClass('active in'); // Remove 'active' from all tab panes
      $(hash).addClass('active in'); // Add 'active' to the target tab pane
      $(`a[href="${hash}"]`).tab('show'); // Show the tab linked to the hash
   }
});
