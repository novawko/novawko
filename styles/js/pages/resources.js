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

      
      }

    }

  );
  
  charadex.tools.loadPage('.softload', 0);
  
});

/* ==================================================================== */
/* Hide the mobile sidebar toggle until I add the sidebar fully
======================================================================= */
document.querySelectorAll('.nav-mobile-menu').forEach(element => {
  element.style.display = 'none';
});
