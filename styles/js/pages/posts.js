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
// --- HELPER FUNCTION: Safely extracts the unique post identifier ---
function getPostId(buttonElement) {
  return buttonElement.getAttribute('data-post-id') || 
         buttonElement.getAttribute('data-id') || 
         buttonElement.id;
}

// 1. CLICK HANDLER (GLOBAL DELEGATION)
document.addEventListener('click', (e) => {
  const likeButton = e.target.closest('.like-btn');
  if (!likeButton) return;

  e.preventDefault();

  const postId = getPostId(likeButton);
  const likeIcon = likeButton.querySelector('.like-icon');
  const likeCount = likeButton.querySelector('.like-count');

  // If we can't find an ID, log a detailed error to fix it
  if (!postId) {
    console.error("Critical: Clicked a .like-btn but could not extract an ID attribute!", likeButton);
    return;
  }
  if (!likeIcon || !likeCount) return;

  let isLiked = likeButton.classList.contains('liked');
  isLiked = !isLiked;

  let count = parseInt(likeCount.innerText, 10) || 0;

  if (isLiked) {
    count++;
    likeButton.classList.add('liked');
    if (likeIcon.classList.contains('fa-regular')) {
      likeIcon.classList.replace('fa-regular', 'fa-solid');
    }
  } else {
    count--;
    likeButton.classList.remove('liked');
    if (likeIcon.classList.contains('fa-solid')) {
      likeIcon.classList.replace('fa-solid', 'fa-regular');
    }
  }

  likeCount.innerText = count;

  // Persist states safely
  localStorage.setItem(`liked_post_${postId}`, isLiked);
  localStorage.setItem(`count_post_${postId}`, count);
});


// 2. STATE RESTORATION ENGINE (EXECUTES IMMEDIATELY ON MODULE LOAD)
const allLikeButtons = document.querySelectorAll('.like-btn');

allLikeButtons.forEach((button) => {
  const postId = getPostId(button);
  const likeIcon = button.querySelector('.like-icon');
  const likeCount = button.querySelector('.like-count');

  if (!postId || !likeIcon || !likeCount) return;

  // Restore active visual style
  if (localStorage.getItem(`liked_post_${postId}`) === 'true') {
    button.classList.add('liked');
    if (likeIcon.classList.contains('fa-regular')) {
      likeIcon.classList.replace('fa-regular', 'fa-solid');
    }
  }

  // Restore calculated counter volume
  if (localStorage.getItem(`count_post_${postId}`)) {
    likeCount.innerText = localStorage.getItem(`count_post_${postId}`);
  }
});
