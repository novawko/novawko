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
  const likeCount = document.getElementById('likeCount');

  if (!likeButton || !likeCount) return;

  let count = 0;
  let isLiked = false;

  // Load initial states from localStorage
  if (localStorage.getItem('isLiked') === 'true') {
    isLiked = true;
    likeButton.classList.add('liked');
    
    // Find the icon dynamically inside the button regardless of if it's an <i> or an <svg>
    const icon = likeButton.querySelector('.fa-heart, svg');
    if (icon) {
      icon.classList.remove('fa-regular');
      icon.classList.add('fa-solid');
    }
  }

  if (localStorage.getItem('likeCount')) {
    count = parseInt(localStorage.getItem('likeCount'), 10);
  }
  likeCount.innerText = count;

  // Handle clicks
  likeButton.addEventListener('click', (e) => {
    // Prevent any button behavior form submissions or hash jumps
    e.preventDefault(); 
    
    isLiked = !isLiked;
    const icon = likeButton.querySelector('.fa-heart, svg');
    
    if (isLiked) {
      count++;
      likeButton.classList.add('liked');
      if (icon) {
        icon.classList.remove('fa-regular');
        icon.classList.add('fa-solid');
      }
    } else {
      count--;
      likeButton.classList.remove('liked');
      if (icon) {
        icon.classList.remove('fa-solid');
        icon.classList.add('fa-regular');
      }
    }
    
    likeCount.innerText = count;

    localStorage.setItem('isLiked', isLiked);
    localStorage.setItem('likeCount', count);
  });
});
