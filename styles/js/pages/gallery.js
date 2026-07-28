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
    let cleanId = id.trim();
    
    // Search the "Characters" Google Sheet data array for a matching ID or slug
    let character = Characters.find(c => 
        (c.id && c.id.toLowerCase() === cleanId.toLowerCase()) || 
        (c.slug && c.slug.toLowerCase() === cleanId.toLowerCase())
    );
    
    // Use the character's name if found, otherwise fall back to the ID
    let displayName = character && character.name ? character.name : cleanId;

    entry.nameBadges.push(
        `<a class="badge badge-primary" href="${charadex.url.addUrlParameters(charadex.url.getPageUrl('characters'), {profile: cleanId})}">${displayName}</a>`
    );
}

entry.nameBadges = entry.nameBadges.join(' ');

      }
    }
  );

  charadex.tools.loadPage('.softload', 500);

});
