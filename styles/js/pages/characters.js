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
    charadex.page.characters,
    null, 
    async (listData) => {

      if (listData.type == 'profile') {

        console.log(listData.profileArray[0]);

        // Create the log dex
        if (charadex.tools.checkArray(listData.profileArray[0].characterlog)) {
          let logs = await charadex.initialize.page(
            listData.profileArray[0].characterlog,
            charadex.page.characters.relatedData['character log']
          );
        }

        // Create the image gallery
        if (charadex.tools.checkArray(listData.profileArray[0].imagegallery)) {
          let gallery = await charadex.initialize.page(
            listData.profileArray[0].imagegallery,
            charadex.page.characters.relatedData['image gallery']
          );
        }

      }

    }

  );
  
  charadex.tools.loadPage('.softload', 500);
  
});


/* ==================================================================== */
/* This helps the profile tabs become a direct link
======================================================================= */
  $(document).ready(function() {

    if ($('.profile-tabs').length > 0) { 
        var hashtag = window.location.hash;
        if (hashtag!='') {
            $('.profile-tabs > li').removeClass('active');
            $('.profile-tabs > li > a[href="'+hashtag+'"]').parent('li').addClass('active');
            $('.tab-content > div').removeClass('active');
            $(hashtag).addClass('active');
        }
    }

});
