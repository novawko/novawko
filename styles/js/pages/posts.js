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
document.addEventListener('click', (e) => {
  // Target the button class
  const likeButton = e.target.closest('.like-btn');
  if (!likeButton) return;

  e.preventDefault();

  const postId = likeButton.getAttribute('data-id');
  // Target sub-elements via classes instead of IDs
  const likeIcon = likeButton.querySelector('.like-icon');
  const likeCount = likeButton.querySelector('.like-count');

  if (!likeIcon || !likeCount || !postId) return;

  let isLiked = likeButton.classList.contains('liked');
  isLiked = !isLiked;

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

  likeCount.innerText = count;

  localStorage.setItem(`liked_post_${postId}`, isLiked);
  localStorage.setItem(`count_post_${postId}`, count);
});

// Run this directly on the page script load:
const allLikeButtons = document.querySelectorAll('.like-btn');

allLikeButtons.forEach((button) => {
  // Check if your HTML uses data-id or data-post-id
  const postId = button.getAttribute('data-id') || button.getAttribute('data-post-id');
  const likeIcon = button.querySelector('.like-icon');
  const likeCount = button.querySelector('.like-count');

  if (!postId || !likeIcon || !likeCount) return;

  // 1. Restore the visual button and heart state
  if (localStorage.getItem(`liked_post_${postId}`) === 'true') {
    button.classList.add('liked');
    likeIcon.classList.replace('fa-regular', 'fa-solid');
  }

  // 2. Restore the specific numeric count value from memory
  if (localStorage.getItem(`count_post_${postId}`)) {
    likeCount.innerText = localStorage.getItem(`count_post_${postId}`);
  }
});
