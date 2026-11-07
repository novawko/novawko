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

// Restore states on page load
document.addEventListener('DOMContentLoaded', () => {
  const allLikeButtons = document.querySelectorAll('.like-btn');

  allLikeButtons.forEach((button) => {
    const postId = button.getAttribute('data-id');
    const likeIcon = button.querySelector('.like-icon');
    const likeCount = button.querySelector('.like-count');

    if (!postId || !likeIcon || !likeCount) return;

    if (localStorage.getItem(`liked_post_${postId}`) === 'true') {
      button.classList.add('liked');
      likeIcon.classList.replace('fa-regular', 'fa-solid');
    }

    if (localStorage.getItem(`count_post_${postId}`)) {
      likeCount.innerText = localStorage.getItem(`count_post_${postId}`);
    }
  });
});
