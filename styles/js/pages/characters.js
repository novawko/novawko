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
    null, 
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

/* ==================================================================== */
/* Spilt them annoying prefixes to look nicer
======================================================================= */
if (urlParams.has('id')) {
        
        (() => {

          let len = sheetArray.length;
          while (len--) {
            if (sheetArray[len].orderID == urlParams.get('id').replace(/\D+/gm,"")) {
              
              // Prev
              if (sheetArray[len - 1]) {
                $("#entryPrev").attr("href", url.href.split('?id')[0].split('&id')[0] + preParam + sheetArray[len - 1].id);
                $("#entryPrev span").text(sheetArray[len - 1].id);
              } else {
                $("#entryPrev i").remove();
              }

              // Next
              if (sheetArray[len + 1]) {
                console.log(sheetArray[len + 1]);
                $("#entryNext").attr("href", url.href.split('?id')[0].split('&id')[0] + preParam + sheetArray[len + 1].id);
                $("#entryNext span").text(sheetArray[len + 1].id);
              } else {
                $("#entryNext i").remove();
              }

            }
          }

    
  );
  
  charadex.tools.loadPage('.softload', 500);
  
});
