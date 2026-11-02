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
/* Load and switch specific navtabs + scroll to ID headers inside them  */ 
/* ==================================================================== */ 
$(function () {
    function handleHashTab() {
        var hash = window.location.hash;
        if (hash) {
            // 1. Find the tab link that controls this content ID
            var $targetTab = $(`a[href="${hash}"], a[data-target="${hash}"]`);
            
            // 2. If the hash is actually a header inside a tab, find its parent pane
            var $insidePane = $(hash).closest('.tab-pane');
            if ($insidePane.length && !$targetTab.length) {
                // Find the tab link pointing to the parent pane instead
                $targetTab = $(`a[href="#${$insidePane.attr('id')}"], a[data-target="#${$insidePane.attr('id')}"]`);
            }

            // 3. Activate the tab
            if ($targetTab.length) {
                $targetTab.tab('show');
            }

            // 4. Scroll exactly to the target element (the tab pane or the specific header ID)
            var $scrollTarget = $(hash);
            if ($scrollTarget.length) {
                setTimeout(function() {
                    $('html, body').animate({
                        scrollTop: $scrollTarget.offset().top - 40 // Adjust 40 to clear fixed navbars
                    }, 400);
                }, 200); // 200ms delay lets Bootstrap finish its fade-in animation
            }
        }
    }

    // Run on initial page load
    handleHashTab();

    // Run on link clicks that change the hash
    $(window).on('hashchange', function () {
        handleHashTab();
    });
});
