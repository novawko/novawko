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

  // Safety check to ensure elements are ready
  if (!likeButton || !likeIcon || !likeCount) {
    console.error("Like button elements could not be found via their IDs.");
    return;
  }

  let count = 0;
  let isLiked = false;

  // 1. Load initial states from localStorage
  if (localStorage.getItem('isLiked') === 'true') {
    isLiked = true;
    likeButton.classList.add('liked');
    // Correctly using your likeIcon variable
    likeIcon.classList.replace('fa-regular', 'fa-solid');
  }

  if (localStorage.getItem('likeCount')) {
    count = parseInt(localStorage.getItem('likeCount'), 10);
  }
  likeCount.innerText = count;

  // 2. Handle clicks
  likeButton.addEventListener('click', (e) => {
    e.preventDefault(); // Prevents layout jumps or form submissions
    
    isLiked = !isLiked;
    
    if (isLiked) {
      count++;
      likeButton.classList.add('liked');
      // Correctly updates your likeIcon variable
      likeIcon.classList.replace('fa-regular', 'fa-solid');
    } else {
      count--;
      likeButton.classList.remove('liked');
      // Correctly updates your likeIcon variable
      likeIcon.classList.replace('fa-solid', 'fa-regular');
    }
    
    likeCount.innerText = count;

    // Save states locally
    localStorage.setItem('isLiked', isLiked);
    localStorage.setItem('likeCount', count);
  });
});
