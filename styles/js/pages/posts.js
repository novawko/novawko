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
// 1. Handle Clicks using Event Delegation
document.addEventListener('click', (e) => {
  // Find closest button with the class .like-btn
  const likeButton = e.target.closest('.like-btn');
  if (!likeButton) return;

  e.preventDefault();

  // Extract the unique ID for this specific post
  const postId = likeButton.getAttribute('data-post-id');
  const likeIcon = likeButton.querySelector('.like-icon');
  const likeCount = likeButton.querySelector('.like-count');

  if (!likeIcon || !likeCount) return;

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

  // Save the states using keys unique to this specific post ID
  localStorage.setItem(`liked_post_${postId}`, isLiked);
  localStorage.setItem(`count_post_${postId}`, count);
});

// 2. Restore individual post states when the page loads
document.addEventListener('DOMContentLoaded', () => {
  const allLikeButtons = document.querySelectorAll('.like-btn');

  allLikeButtons.forEach((button) => {
    const postId = button.getAttribute('data-post-id');
    const likeIcon = button.querySelector('.like-icon');
    const likeCount = button.querySelector('.like-count');

    if (!postId || !likeIcon || !likeCount) return;

    // Load initial states matching this specific post ID
    if (localStorage.getItem(`liked_post_${postId}`) === 'true') {
      button.classList.add('liked');
      likeIcon.classList.replace('fa-regular', 'fa-solid');
    }

    if (localStorage.getItem(`count_post_${postId}`)) {
      likeCount.innerText = localStorage.getItem(`count_post_${postId}`);
    }
  });
});
