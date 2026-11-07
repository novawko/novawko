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
// 1. Your specific Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFBIkJBlv2jHIC5Gcw_xlKBKYe5TvEl4Y",
  authDomain: "://firebaseapp.com",
  databaseURL: "https://firebaseio.com",
  projectId: "novawko-7c2d3",
  storageBucket: "://appspot.com",
  messagingSenderId: "1097571892349",
  appId: "1:1097571892349:web:37ef1271b741f7aa9a8514",
  measurementId: "G-3TPRQX3G73"
};

// 2. Initialize Firebase using the global browser object bundle
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// Clean up old faulty global keys
if (localStorage.getItem('isLiked')) localStorage.removeItem('isLiked');
if (localStorage.getItem('likeCount')) localStorage.removeItem('likeCount');

// --- HELPER FUNCTION: Extracts unique post identifier ---
function getPostId(buttonElement) {
  return buttonElement.getAttribute('data-post-id') || 
         buttonElement.getAttribute('data-id') || 
         buttonElement.id;
}

// 3. LISTEN AND SYNC GLOBAL LIKE COUNTS LIVE FROM THE CLOUD
function syncPostLive(button) {
  const postId = getPostId(button);
  const likeIcon = button.querySelector('.like-icon');
  const likeCount = button.querySelector('.like-count');

  if (!postId || !likeIcon || !likeCount) return;

  // Restore the user's personal layout "liked" state from local browser history
  if (localStorage.getItem(`liked_post_${postId}`) === 'true') {
    button.classList.add('liked');
    if (likeIcon.classList.contains('fa-regular')) {
      likeIcon.classList.replace('fa-regular', 'fa-solid');
    }
  }

  // Create a live data listener pointing to your database node path
  const countRef = db.ref(`posts/${postId}/count`);
  
  countRef.on('value', (snapshot) => {
    const cloudValue = snapshot.val();
    likeCount.innerText = cloudValue !== null ? cloudValue : 0;
  });
}

// 4. ATOMIC TRANSMISSION TRIGGER (HANDLES USER CLICK EVENTS)
document.addEventListener('click', (e) => {
  const likeButton = e.target.closest('.like-btn');
  if (!likeButton) return;

  e.preventDefault();

  const postId = getPostId(likeButton);
  if (!postId) return;

  let isLiked = likeButton.classList.contains('liked');
  isLiked = !isLiked;

  const likeIcon = likeButton.querySelector('.like-icon');
  if (isLiked) {
    likeButton.classList.add('liked');
    likeIcon?.classList.replace('fa-regular', 'fa-solid');
    localStorage.setItem(`liked_post_${postId}`, 'true');
  } else {
    likeButton.classList.remove('liked');
    likeIcon?.classList.replace('fa-solid', 'fa-regular');
    localStorage.setItem(`liked_post_${postId}`, 'false');
  }

  const postCountRef = db.ref(`posts/${postId}/count`);

  // Run transaction helper so numbers calculate correctly on the live server
  postCountRef.transaction((currentCount) => {
    if (currentCount === null) currentCount = 0;
    return isLiked ? currentCount + 1 : Math.max(0, currentCount - 1);
  });
});

// 5. MUTATIONOBSERVER SETUP FOR INCOMING DYNAMIC LATE-LOADED CARDS
const observer = new MutationObserver(() => {
  document.querySelectorAll('.like-btn').forEach((button) => {
    if (!button.hasAttribute('data-firebase-bound')) {
      syncPostLive(button);
      button.setAttribute('data-firebase-bound', 'true');
    }
  });
});

observer.observe(document.body, { childList: true, subtree: true });

// Initial structural crawl check
document.querySelectorAll('.like-btn').forEach(button => {
  syncPostLive(button);
  button.setAttribute('data-firebase-bound', 'true');
});
