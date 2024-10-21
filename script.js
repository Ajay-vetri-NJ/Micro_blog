// Get references to DOM elements
const postButton = document.getElementById('postButton');
const postContent = document.getElementById('postContent');
const postsContainer = document.getElementById('postsContainer');

// Add event listener to the post button
postButton.addEventListener('click', createPost);

// Function to create a new post
function createPost() {
  const content = postContent.value.trim();

  if (content === "") {
    alert('Please write something before posting.');
    return;
  }

  const post = document.createElement('div');
  post.classList.add('post');

  const contentDiv = document.createElement('div');
  contentDiv.classList.add('content');
  contentDiv.textContent = content;

  const timestamp = document.createElement('div');
  timestamp.classList.add('timestamp');
  timestamp.textContent = new Date().toLocaleString();

  post.appendChild(contentDiv);
  post.appendChild(timestamp);

  postsContainer.prepend(post);  // Add the new post to the top of the feed

  // Clear the textarea
  postContent.value = '';
}
