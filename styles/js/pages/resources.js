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

/* ==================================================================== */
/* Load the bookmarks when visited
======================================================================= */
      window.addEventListener('load', () => {
        const targetElement = document.getElementById('bookmarks');
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth', // Optional: for smooth scrolling animation
                block: 'start'      // Optional: aligns the top of the element with the top of the viewport
            });
        }
    });

  
  charadex.tools.loadPage('.softload', 500);
  
});
