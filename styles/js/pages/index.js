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

  // Splice the silly little array
  let sliceAmount = charadex.page.index.updates.amount || 10;
  arr.splice(sliceAmount, arr.length);

  // Reverse the thing
  let updates = arr.reverse();
    
  });


  /* Load Page
  ===================================================================== */
  charadex.tools.loadPage('.softload', 100);

});
