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
document.addEventListener('DOMContentLoaded', () => {
  const likeButton = document.getElementById('likeButton');
  const likeIcon = document.getElementById('likeIcon');
  const likeCount = document.getElementById('likeCount');

  // Verify elements exist to prevent silent failures
  if (!likeButton || !likeIcon || !likeCount) {
    console.error("Like button elements could not be found in the DOM.");
    return;
  }

  let count = 0;
  let isLiked = false;

  // Load initial states from localStorage
  if (localStorage.getItem('isLiked') === 'true') {
    isLiked = true;
    likeButton.classList.add('liked');
    likeIcon.classList.replace('fa-regular', 'fa-solid');
  }

  if (localStorage.getItem('likeCount')) {
    count = parseInt(localStorage.getItem('likeCount'), 10);
  }
  likeCount.innerText = count;

  // Handle clicks
  likeButton.addEventListener('click', () => {
    isLiked = !isLiked;
    
    if (isLiked) {
      count++;
      likeButton.classList.add('liked');
      likeIcon.classList.replace('fa-regular', 'fa-solid');
    } else {
      count--;
      likeButton.classList.remove('liked');
      likeIcon.classList.replace('fa-solid', 'fa-regular');
    }
    
    likeCount.innerText = count;

    localStorage.setItem('isLiked', isLiked);
    localStorage.setItem('likeCount', count);
  });
});
