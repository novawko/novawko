/* ==================================================================== */
/* Import Charadex
======================================================================= */
import { charadex } from '../charadex.js';


/* ==================================================================== */
/* Load
======================================================================= */
document.addEventListener("DOMContentLoaded", async () => {

  /* News
  ===================================================================== */
  let news = await charadex.initialize.page(null, charadex.page.index.news, (arr) => {

      // Splice the silly little array
      let sliceAmount = charadex.page.index.news.amount || 4;
      arr.splice(sliceAmount, arr.length);

    }, (data) => {

      // Add the silly little news stuff here too
      $('.cd-prompt-background').each(function(i) {
        const element = $(this);
        const image = data.array[i]?.image;
        element.attr('style', `background-image: url(${image})`);
      });
      
    }
    
  );


  /* Connections
  ===================================================================== */
  let connections = await charadex.initialize.page(null, charadex.page.index.connections, (arr) => {
    
    // Splice the silly little array
    let sliceAmount = charadex.page.index.connections.amount || 6;
    arr.splice(sliceAmount, arr.length);

  });


  /* Characters
  ===================================================================== */
  let designs = await charadex.initialize.page(null, charadex.page.index.characters, (arr) => {
    
    // Splice the silly little array
    let sliceAmount = charadex.page.index.characters.amount || 6;
    arr.splice(sliceAmount, arr.length);

  });


  /* Load Page
  ===================================================================== */
  charadex.tools.loadPage('.softload', 500);

});
