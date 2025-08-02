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
    charadex.page.resources,
    null, 
    async (listData) => {

      if (listData.type == 'profile') {

        console.log(listData.profileArray[0]);

        // Create the image gallery
        if (charadex.tools.checkArray(listData.profileArray[0].resourcegallery)) {
          let gallery = await charadex.initialize.page(
            listData.profileArray[0].resourcegallery,
            charadex.page.resources.relatedData['resource gallery']
          );
        }

      }

    }

  );
  
  charadex.tools.loadPage('.softload', 500);
  
});
