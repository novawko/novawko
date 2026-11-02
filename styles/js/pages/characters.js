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
/* Load specific nav-item tab from URL hash and scroll to it
======================================================================= */
$(function () {
   var hash = window.location.hash; // Captures "#perms"

   if (hash !== '') {
      // 1. Find the link inside the nav-item matching the hash
      var $targetLink = $(`.nav-item a[href="${hash}"], a.nav-link[href="${hash}"]`);

      if ($targetLink.length) {
         // 2. Remove 'active' and 'in' states from all panes and nav items
         $('.tab-pane').removeClass('active in');
         $('.nav-item, .nav-link').removeClass('active');

         // 3. Add active state to the parent .nav-item and the link itself
         $targetLink.addClass('active');
         $targetLink.closest('.nav-item').addClass('active');

         // 4. Trigger Bootstrap's tab display method
         $targetLink.tab('show'); 

         // 5. Force the target content pane to display
         $(hash).addClass('active in'); 

         // 6. Smoothly scroll down to the target content pane
         setTimeout(function() {
            var targetPane = document.getElementById(hash.replace('#', ''));
            if (targetPane) {
               targetPane.scrollIntoView({ 
                  behavior: 'smooth', 
                  block: 'start' 
               });
            }
         }, 200); // 200ms ensures Bootstrap finishes animating the display change
      }
   }
});


