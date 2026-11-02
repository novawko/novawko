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
/* Global URL-Driven Tab Activation & Hash Scrolling
======================================================================= */
$(function () {
    var urlParams = new URLSearchParams(window.location.search);
    var hash = window.location.hash;

    // 1. Globally check query parameter values against tab panes on the page
    urlParams.forEach(function (value) {
        var $targetPane = $('#' + value);
        if ($targetPane.length && $targetPane.hasClass('tab-pane')) {
            $('.tab-pane').removeClass('active in');
            $targetPane.addClass('active in');
            $(`a[href="#${value}"]`).tab('show');
        }
    });

    // 2. Globally handle scrolling to any hash anchor after content renders
    if (hash) {
        setTimeout(function () {
            var $target = $(hash);
            if ($target.length) {
                $('html, body').animate({
                    scrollTop: $target.offset().top
                }, 300);
            }
        }, 150);
    }
});
