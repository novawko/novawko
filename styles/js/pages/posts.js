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
// --- HELPER FUNCTION: Extracts unique post identifier ---
function getPostId(buttonElement) {
  return buttonElement.getAttribute('data-post-id') || 
         buttonElement.getAttribute('data-id') || 
         buttonElement.id;
}

// --- FUNCTION: Restores a single button's saved state ---
function restoreButtonState(button) {
  const postId = getPostId(button);
  const likeIcon = button.querySelector('.like-icon');
  const likeCount = button.querySelector('.like-count');

  if (!postId || !likeIcon || !likeCount) return;

  // 1. Restore active visual style
  if (localStorage.getItem(`liked_post_${postId}`) === 'true') {
    button.classList.add('liked');
    if (likeIcon.classList.contains('fa-regular')) {
      likeIcon.classList.replace('fa-regular', 'fa-solid');
    }
  }

  // 2. Restore calculated counter volume
  if (localStorage.getItem(`count_post_${postId}`)) {
    likeCount.innerText = localStorage.getItem(`count_post_${postId}`);
  }
}

// 1. CLICK HANDLER (GLOBAL DELEGATION)
document.addEventListener('click', (e) => {
  const likeButton = e.target.closest('.like-btn');
  if (!likeButton) return;

  e.preventDefault();

  const postId = getPostId(likeButton);
  const likeIcon = likeButton.querySelector('.like-icon');
  const likeCount = likeButton.querySelector('.like-count');

  if (!postId || !likeIcon || !likeCount) return;

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

  localStorage.setItem(`liked_post_${postId}`, isLiked);
  localStorage.setItem(`count_post_${postId}`, count);
});

// 2. AUTOMATIC RESTORATION WATCHER (FOR DYNAMIC/DELAYED POSTS)
const observer = new MutationObserver(() => {
  const allLikeButtons = document.querySelectorAll('.like-btn');
  allLikeButtons.forEach((button) => {
    // Only process buttons that haven't been checked yet
    if (!button.hasAttribute('data-state-restored')) {
      restoreButtonState(button);
      button.setAttribute('data-state-restored', 'true');
    }
  });
});

// Start watching the document body for any changes or incoming posts
observer.observe(document.body, { childList: true, subtree: true });

// Run a quick check immediately just in case any are already there
document.querySelectorAll('.like-btn').forEach(button => {
  restoreButtonState(button);
  button.setAttribute('data-state-restored', 'true');
});
