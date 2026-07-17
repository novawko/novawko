/* ==================================================================== */
/* Import Charadex
======================================================================= */
import { charadex } from '../charadex.js';


/* ==================================================================== */
/* Load
======================================================================= */
document.addEventListener("DOMContentLoaded", async () => {

  /* Prompts
  ===================================================================== */
  let mockPrompts = await charadex.initialize.page(null, charadex.page.index.mockPrompts, (arr) => {

      // Splice the silly little array
      let sliceAmount = charadex.page.index.mockPrompts.amount || 4;
      arr.splice(sliceAmount, arr.length);

    }, (data) => {

      // Add the silly little prompt stuff here too
      $('.cd-prompt-background').each(function(i) {
        const element = $(this);
        const image = data.array[i]?.image;
        element.attr('style', `background-image: url(${image})`);
      });
      
    }
    
  );



  /* Load Page
  ===================================================================== */
  charadex.tools.loadPage('.softload', 500);

});
