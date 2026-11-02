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
      charadex.page.characters,
      
      // Callback 1: Format array items (including your tags snippet)
      (arr) => {
         for (let entry of arr) {
            // Make the tags pretty and actually work
            entry.tags = entry.tags ? entry.tags.split(',') : [];
            let fancyTagArr = [];
            if (entry.tags.length >= 1) {
               for (let tag of entry.tags) {
                  fancyTagArr.push(`<a href="${charadex.url.addUrlParameters(charadex.url.getPageUrl(charadex.page.characters.sitePage), {tags: tag})}">#${tag.trim()}</a>`);
               }
            }
            entry.fancytags = fancyTagArr.join(' ');
         }
      },

      // Callback 2: Handle profile views, logs, and galleries
      async (listData) => {
         if (listData.type == 'profile') {
            
            console.log(listData.profileArray[0]);

            // Create the log dex
            if (charadex.tools.checkArray(listData.profileArray[0].characterlog)) {
               let logs = await charadex.initialize.page(
                  listData.profileArray[0].characterlog,
                  charadex.page.characters.relatedData['character log']
               );
            }

            // Create the image gallery
            if (charadex.tools.checkArray(listData.profileArray[0].imagegallery)) {
               let gallery = await charadex.initialize.page(
                  listData.profileArray[0].imagegallery,
                  charadex.page.characters.relatedData['image gallery']
               );
            }
         }
      }
   );

   charadex.tools.loadPage('.softload', 500);

});


/* ==================================================================== */
/* Load specific navtab from URL hash and scroll to it
======================================================================= */
$(function () {
   var hash = window.location.hash; // Captures "#perms" from the URL

   if (hash !== '') {
      // 1. Find the Bootstrap tab anchor that links to this hash (e.g., a[href="#perms"])
      var $targetTabLink = $(`a[href="${hash}"]`);

      if ($targetTabLink.length) {
         // 2. Clear out existing active classes from other tabs/panes
         $('.tab-pane').removeClass('active in');
         $('.nav-tabs li, .nav-link').removeClass('active'); // Clears active states on nav headers

         // 3. Show the tab using Bootstrap's native programmatic method
         $targetTabLink.tab('show'); 

         // 4. Fallback matching to force display if Bootstrap's method doesn't auto-toggle the pane
         $(hash).addClass('active in'); 

         // 5. Scroll down to the newly opened tab pane once rendered
         setTimeout(function() {
            var targetPane = document.getElementById(hash.replace('#', ''));
            if (targetPane) {
               targetPane.scrollIntoView({ 
                  behavior: 'auto', 
                  block: 'start' 
               });
            }
         }, 150); // 150ms delay gives Bootstrap room to complete the fade/transition animation
      }
   }
});

