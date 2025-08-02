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
/* This helps the logs tab become a direct link
======================================================================= */
$( function() {
    function changeTab() {
        var logs = window.location.hash.substr(1);
        var profile-tabs = $('[data-w-tab="' + logs + '"]');
        if (profile-tabs.length) {
            profile-tabs.click();
        }
    }
    jQuery('[data-w-tab]').each(function(){
      var $this = $(this);
      var dataWTabValu = jQuery($this).attr('data-w-tab');
      var pargedDataTab = dataWTabValu.replace(/\s+/g,"-");
      jQuery($this).attr('data-w-tab', pargedDataTab);
    });

    //when page is first loaded
    if(window.location.hash){
        changeTab();
    }

    //internal page linking
    $(window).on('hashchange', changeTab);

    $('[data-w-tab]').on('click', function(){
        history.pushState({}, '', '#'+$(this).data("w-tab"));
    });
    
});
