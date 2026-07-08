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
    charadex.page.imageGallery, 
    (arr) => {
      for (let entry of arr) {

        // 1. Split the IDs listed in picturedcharacters
        entry.picturedcharacters = entry.picturedcharacters ? entry.picturedcharacters.split(',') : [];
        entry.nameBadges = [];

        for (let id of entry.picturedcharacters) {
          let charId = id.trim();
          if (!charId) continue;

          // 2. Find the character in Charadex's master list ('characters' sheet) matching this ID
          // (Adjust 'charadex.data.characters' if your master sheet has a different name)
          let charData = charadex.data.characters ? charadex.data.characters.find(c => String(c.id) === charId) : null;
          
          // 3. Fallback to the ID if the character isn't found in the master sheet yet
          let displayName = charData ? charData.name : charId;

          entry.nameBadges.push(
            `<a class="badge badge-primary" href="${charadex.url.addUrlParameters(charadex.url.getPageUrl('characters'), {profile: charId})}">${displayName}</a>`
          );
        }
        entry.nameBadges = entry.nameBadges.join(' ');

        // Make the tags pretty and actually work
        entry.tags = entry.tags ? entry.tags.split(',') : [];
        let fancyTagArr = [];
        if (entry.tags.length >= 1) {
          for (let tag of entry.tags) {
            fancyTagArr.push(`<a href="${charadex.url.addUrlParameters(charadex.url.getPageUrl(charadex.page.imageGallery.sitePage), {tags: tag})}">#${tag.trim()}</a>`);
          }
        }
        entry.fancytags = fancyTagArr.join(' ');

      }
    }
  );

  charadex.tools.loadPage('.softload', 500);

});
