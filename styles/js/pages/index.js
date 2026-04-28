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
  let sliceAmount = charadex.page.index.news.amount || 6;
  arr.splice(sliceAmount, arr.length); 
      
  });


  /* Artwork
  ===================================================================== */
  let artwork = await charadex.initialize.page(null, charadex.page.index.art, (arr) => {

  // Splice the silly little array
  let sliceAmount = charadex.page.index.art.amount || 12;
  arr.splice(sliceAmount, arr.length); 
      
  });


  /* Characters
  ===================================================================== */
  let designs = await charadex.initialize.page(null, charadex.page.index.designs, (arr) => {

  // Splice the silly little array
  let sliceAmount = charadex.page.index.designs.amount || 5;
  arr.splice(sliceAmount, arr.length);
    
  });


  /* Load Page
  ===================================================================== */
  charadex.tools.loadPage('.softload', 100);

});


/* ==================================================================== */
/* Pop-Up
======================================================================= */
  const closeBtn = document.getElementById('close');
  const modalMenu = document.getElementById('modal');

  setTimeout(() => {
      modalMenu.classList.add('show');
  }, 500);

  closeBtn.addEventListener('click', () => { modalMenu.classList.remove('show') });
