document.addEventListener('DOMContentLoaded', function() {
  const textPostForm = document.getElementById('post-form');
  const postInput = document.getElementById('post-input');
  const textPostedContent = document.getElementById('posted-content');
  const MAX_WORDS = 50; // Change this to your desired word limit
  
  textPostForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the form from submitting traditionally
    
      const postContent = postInput.value;
      
      // Calculate the number of words in the post content
      const wordCount = postContent.trim().split(/\s+/).length;
      
      if (wordCount <= MAX_WORDS) {
          // Create a new post element and append it to the appropriate content div
          const postElement = document.createElement('div');
          postElement.className = 'post';
          postElement.textContent = postContent;
      
          textPostedContent.appendChild(postElement);
      
          // Clear the input fields after posting
          postInput.value = '';
      } else {
          alert(`Maximum word limit exceeded. Please limit your post to ${MAX_WORDS} words.`);
      }
  });
  
  // Call the update function initially
});

