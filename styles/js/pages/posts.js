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
const likeButton = document.getElementById('likeButton');
const likeIcon = document.getElementById('likeIcon');
const likeCount = document.getElementById('likeCount');

// Initialize base variables
let count = 0;
let isLiked = false;

// 1. Load initial states from localStorage on page load
if (localStorage.getItem('isLiked') === 'true') {
  isLiked = true;
  likeButton.classList.add('liked');
  likeIcon.classList.replace('fa-regular', 'fa-solid');
}

// Check if a saved count exists, otherwise fall back to 0
if (localStorage.getItem('likeCount')) {
  count = parseInt(localStorage.getItem('likeCount'), 10);
}
likeCount.innerText = count;

// 2. Handle button clicks and update localStorage
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
  
  // Render updated count
  likeCount.innerText = count;

  // Save the new states locally
  localStorage.setItem('isLiked', isLiked);
  localStorage.setItem('likeCount', count);
});
