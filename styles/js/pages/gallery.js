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

        // We're gonna make some badges but you dont have to use them
entry.picturedcharacters = entry.picturedcharacters.split(',');
entry.nameBadges = [];

for (let id of entry.picturedcharacters) {
    // 1. Find the character object that matches this ID
    // Replace 'characters' with the variable that holds your full character list
    const character = name.find(c => c.id == id);
    
    // 2. Use the character's name if found, otherwise fallback to the ID
    const displayName = character ? character.name : id;

    entry.nameBadges.push(
        `<a class="badge badge-primary" href="${charadex.url.addUrlParameters(charadex.url.getPageUrl('characters'), {profile: id})}">${displayName.trim()}</a>`
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
