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
  let announcements = await charadex.initialize.page(null, charadex.page.index.news, (arr) => {

  // Splice the silly little array
  let sliceAmount = charadex.page.index.news.amount || 10;
  arr.splice(sliceAmount, arr.length); 
      
  });


  /* Artwork
  ===================================================================== */
  let artwork = await charadex.initialize.page(null, charadex.page.index.art, (arr) => {

  // Splice the silly little array
  let sliceAmount = charadex.page.index.art.amount || 10;
  arr.splice(sliceAmount, arr.length); 
      
  });


  /* Characters
  ===================================================================== */
  let designs = await charadex.initialize.page(null, charadex.page.index.designs, (arr) => {

  // Splice the silly little array
  let sliceAmount = charadex.page.index.designs.amount || 10;
  arr.splice(sliceAmount, arr.length);
    
  });


  /* Updates
  ===================================================================== */
  let updates = await charadex.initialize.page(null, charadex.page.index.updates, (arr) => {
    
  // Force sliceAmount to 10
  let sliceAmount = 10;

  // Get the last 10 (or fewer if less than 4 exist)
  let recent = arr.slice(-sliceAmount);

  // Overwrite original array in-place
  arr.length = 0;
  arr.push(...recent);
    
});


  /* Load Page
  ===================================================================== */
  charadex.tools.loadPage('.softload', 100);

});
