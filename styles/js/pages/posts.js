/* ==================================================================== */
/* Import Charadex
======================================================================= */
import { charadex } from '../charadex.js';


/* ==================================================================== */
/* Load
======================================================================= */
document.addEventListener("DOMContentLoaded", async () => {
  let dex = await charadex.initialize.page(null, charadex.page.posts);
  charadex.tools.loadPage('.softload', 500);
});


/* ==================================================================== */
/* Like Button
======================================================================= */
// 1. Listen for click events globally across the document body
document.addEventListener('click', (e) => {
  
  // Find if the clicked element (or its inner icons/text) is part of the #likeButton
  const likeButton = e.target.closest('#likeButton');
  
  // If the click wasn't on or inside the like button, ignore it completely
  if (!likeButton) return;

  // Prevent default behaviors like page jumps or form submissons
  e.preventDefault();

  // Find the sub-elements dynamically relative to the clicked button
  const likeIcon = likeButton.querySelector('#likeIcon');
  const likeCount = likeButton.querySelector('#likeCount');

  // Verify elements exist locally before modifying states
  if (!likeIcon || !likeCount) {
    console.error("Found #likeButton, but missing #likeIcon or #likeCount sub-elements.");
    return;
  }

  // 2. Core Logic Execution
  let isLiked = likeButton.classList.contains('liked');
  
  // Toggle the boolean state
  isLiked = !isLiked;

  // Retrieve and parse current count safely
  let count = parseInt(likeCount.innerText, 10) || 0;

  if (isLiked) {
    count++;
    likeButton.classList.add('liked');
    likeIcon.classList.replace('fa-regular', 'fa-solid');
  } else {
    count--;
    likeButton.classList.remove('liked');
    likeIcon.classList.replace('fa-solid', 'fa-regular');
  }

  // Render updated count value to screen
  likeCount.innerText = count;

  // 3. Persist States Locally
  localStorage.setItem('isLiked', isLiked);
  localStorage.setItem('likeCount', count);
});

// 4. Handle initial state placement on page load
document.addEventListener('DOMContentLoaded', () => {
  const likeButton = document.getElementById('likeButton');
  const likeIcon = document.getElementById('likeIcon');
  const likeCount = document.getElementById('likeCount');

  if (likeButton && likeIcon && likeCount) {
    if (localStorage.getItem('isLiked') === 'true') {
      likeButton.classList.add('liked');
      likeIcon.classList.replace('fa-regular', 'fa-solid');
    }
    if (localStorage.getItem('likeCount')) {
      likeCount.innerText = localStorage.getItem('likeCount');
    }
  }
});
