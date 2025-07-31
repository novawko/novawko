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
    charadex.page.nubreolanmasterlist,
    null, 
    async (listData) => {

      if (listData.type == 'profile') {

        console.log(listData.profileArray[0]);

        // Create the log dex
        if (charadex.tools.checkArray(listData.profileArray[0].nubreolanlog)) {
          let logs = await charadex.initialize.page(
            listData.profileArray[0].nubreolanlog,
            charadex.page.nubreolanmasterlist.relatedData['nubreolan log']
          );
        }

      
      }

    }

  );
  
  charadex.tools.loadPage('.softload', 500);
  
});