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

  // Force sliceAmount to 3
  let sliceAmount = 3;

  // Get the last 3 (or fewer if less than 3 exist)
  let recent = arr.slice(-sliceAmount);

  // Overwrite original array in-place
  arr.length = 0;
  arr.push(...recent);

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
  let designs = await charadex.initialize.page(null, charadex.page.index.designs, (arr) => {
  // Force sliceAmount to 4
  let sliceAmount = 4;

  // Get the last 4 (or fewer if less than 4 exist)
  let recent = arr.slice(-sliceAmount);

  // Overwrite original array in-place
  arr.length = 0;
  arr.push(...recent);
    
  });


  /* Nubreolan Masterlist
  ===================================================================== */
  let listings = await charadex.initialize.page(null, charadex.page.index.listings, (arr) => {
  // Force sliceAmount to 4
  let sliceAmount = 4;

  // Get the last 4 (or fewer if less than 4 exist)
  let recent = arr.slice(-sliceAmount);

  // Overwrite original array in-place
  arr.length = 0;
  arr.push(...recent);

  });


  /* Resources
  ===================================================================== */
  let resources = await charadex.initialize.page(null, charadex.page.index.resources, (arr) => {
  // Force sliceAmount to 4
  let sliceAmount = 4;

  // Get the last 4 (or fewer if less than 4 exist)
  let recent = arr.slice(-sliceAmount);

  // Overwrite original array in-place
  arr.length = 0;
  arr.push(...recent);

  });


  /* Load Page
  ===================================================================== */
  charadex.tools.loadPage('.softload', 500);

});
