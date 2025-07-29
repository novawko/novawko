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
/* Split them prefixes out to look nicer
======================================================================= */
    entryNext.split("CHA")
    entryPrev.split("CHA");
    
  );
  
  charadex.tools.loadPage('.softload', 500);
  
});
