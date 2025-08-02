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
    charadex.page.resourceGallery, 
    (arr) => {
      for (let entry of arr) {

        // We're gonna make some badges but you dont have to use them
        entry.resourceTypes = entry.resourceTypes.split(',');
        entry.resourceTypeBadges = [];
        for (let resourceType of entry.resourceTypes) {
          entry.resourceTypeBadges.push(
            `<a class="badge badge-primary" href="${charadex.url.addUrlParameters(charadex.url.getPageUrl('resources'), {profile: resource})}">${resourceType.trim()}</a>`
          );
        }
        entry.resourceTypeBadges = entry.resourceTypeBadges.join(' ');


      }
    }
  );

  charadex.tools.loadPage('.softload', 500);

});
