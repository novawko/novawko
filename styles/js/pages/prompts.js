/* ==================================================================== */
/* Import Charadex
======================================================================= */
import { charadex } from '../charadex.js';


/* ==================================================================== */
/* Load
======================================================================= */
document.addEventListener("DOMContentLoaded", async () => {
  let dex = await charadex.initialize.page(null, charadex.page.prompts, null, 
  (listData) => {
    let backgroundElement = $('.cd-prompt-background');
    if (listData.type == 'profile') {
      backgroundElement.attr('style', `background-image: url(${listData.profileArray[0].image})`);
    } else {
      backgroundElement.each(function(i) {
        const image = listData.array[i]?.image;
        $(this).attr('style', `background-image: url(${image})`);
      });
    };
    let backgroundElement = $('.cd-mewwo-background');
    if (listData.type == 'profile') {
      backgroundElement.attr('style', `background-image: url(${listData.profileArray[0].bannerimage})`);
    } else {
      backgroundElement.each(function(i) {
        const bannerimage = listData.array[i]?.bannerimage;
        $(this).attr('style', `background-image: url(${bannerimage})`);
      });
    }
  });
  charadex.tools.loadPage('.softload', 500);
});
