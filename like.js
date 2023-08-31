 //        LIKE   BUTTON
let likeCount = 0;

  // Function to update the like count display
function updateLikeCount() {
    const likeCountElement = document.getElementById("likeCount");
    likeCountElement.textContent = likeCount.toString();
}
  
  // Function to handle the like button click event
function onLikeButtonClick() {
    likeCount++;
    updateLikeCount();
  
      // In a real-world scenario, you would send a request to the server to save the like information.
      // This can be done using an API endpoint, AJAX, or modern frontend frameworks like React or Vue.
      // For simplicity, we won't implement the server-side interaction in this example.
}
  
  // Add a click event listener to the like button
const likeButton = document.getElementById("likeButton");
likeButton.addEventListener("click", onLikeButtonClick);


//        SHARE BUTTON
const shareButton = document.getElementById('shareButton');
  
function shareContent() {
  const title = 'Title of the shared content';
  const text = 'Text to be shared along with the link';
  const url = 'https://example.com'; // Replace this with your content's URL

  if (navigator.share) {
    navigator.share({
      title: title,
      text: text,
      url: url,
    })
    .then(() => console.log('Shared successfully!'))
    .catch((error) => console.error('Error sharing:', error));
  } else {
    console.log('Share API not supported in this browser.');
    // Implement fallback behavior for browsers that do not support the Share API.
    // For example, open a custom sharing popup or redirect users to the share URL.
  }
}

shareButton.addEventListener('click', shareContent);

