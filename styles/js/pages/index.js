/* ==================================================================== */
/* Import Charadex
======================================================================= */
import { charadex } from '../charadex.js';


/* ==================================================================== */
/* Load
======================================================================= */
document.addEventListener("DOMContentLoaded", async () => {


  /* Characters
  ===================================================================== */
  let designs = await charadex.initialize.page(null, charadex.page.index.designs, (arr) => {

  // Splice the silly little array
  let sliceAmount = charadex.page.index.designs.amount || 5;
  arr.splice(sliceAmount, arr.length);
    
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


  /* Load Page
  ===================================================================== */
  charadex.tools.loadPage('.softload', 0);

});
