/* ==================================================================== */
/* Import Charadex
======================================================================= */
import { charadex } from '../charadex.js';


/* ==================================================================== */
/* Load
======================================================================= */
document.addEventListener("DOMContentLoaded", async () => {


  /* Recent Designs
  ===================================================================== */
  let listings = await charadex.initialize.page(null, charadex.page.nubreolan.listings, (arr) => {

  // Splice the silly little array
  let sliceAmount = charadex.page.nubreolan.listings.amount || 5;
  arr.splice(sliceAmount, arr.length);
    
  });


  /* Load Page
  ===================================================================== */
  charadex.tools.loadPage('.softload', 0);

});
