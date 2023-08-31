document.addEventListener("DOMContentLoaded", function () {
  const submitButton = document.getElementById("submit-comment");
  const commentList = document.querySelector(".comment-list");
  const commentCount = document.querySelector(".count");
  const notifications = document.querySelector(".notifications");

  let commentCounter = 0;

  submitButton.addEventListener("click", function () {
      const comment = document.getElementById("comment").value;

      if (comment) {
          const commentElement = document.createElement("div");
          commentElement.classList.add("comment");

          const commentText = document.createElement("p");
          commentText.textContent = comment;
          commentElement.appendChild(commentText);

          const replyButton = document.createElement("div");
          replyButton.classList.add("comment-reply");
          replyButton.textContent = "Reply";
          commentElement.appendChild(replyButton);

          const replyForm = document.createElement("div");
          replyForm.classList.add("reply-form");
          replyForm.innerHTML = `
              <textarea class="reply-comment" placeholder="Write your reply"></textarea>
              <button class="submit-reply">Submit</button>
          `;
          commentElement.appendChild(replyForm);

          replyButton.addEventListener("click", function () {
              replyForm.style.display = "block";
          });

          const submitReplyButton = replyForm.querySelector(".submit-reply");
          submitReplyButton.addEventListener("click", function () {
              const replyComment = replyForm.querySelector(".reply-comment").value;

              if (replyComment) {
                  const replyElement = document.createElement("div");
                  replyElement.classList.add("reply");

                  const replyText = document.createElement("p");
                  replyText.textContent = replyComment;
                  replyElement.appendChild(replyText);

                  replyForm.style.display = "none";
                  commentElement.appendChild(replyElement);
              }
          });

          commentList.appendChild(commentElement);

          // Increase comment counter for main comments
          commentCounter++;
          commentCount.textContent = commentCounter;
          notifications.style.display = "none";
      }
  });
});

const openButton = document.getElementById('openButton');
const closeButton = document.getElementById('closeButton');
const popupContainer = document.getElementById('popupContainer');

openButton.addEventListener('click', () => {
  popupContainer.style.display = 'flex';
});

closeButton.addEventListener('click', () => {
  popupContainer.style.display = 'none';
});
