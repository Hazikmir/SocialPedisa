function createPost() {
    const postContent = document.getElementById('postContent').value;

    if (postContent.trim() === '') {
        alert('Post content cannot be empty!');
        return;
    }

    const postElement = document.createElement('div');
    postElement.classList.add('post');
    postElement.innerHTML = `
        <div class="content">${postContent}</div>
        <div class="actions">
            <button onclick="likePost(this)">Like (<span>0</span>)</button>
            <button onclick="toggleCommentSection(this)">Comment</button>
        </div>
        <div class="comment-section" style="display: none;">
            <input type="text" placeholder="Write a comment...">
            <button onclick="addComment(this)">Post</button>
            <div class="comments"></div>
        </div>
    `;

    const feed = document.getElementById('feed');
    feed.insertBefore(postElement, feed.firstChild); // Add new post at the top

    document.getElementById('postContent').value = ''; // Clear input
}

function likePost(button) {
    const likeCount = button.querySelector('span');
    likeCount.textContent = parseInt(likeCount.textContent) + 1;
}

function toggleCommentSection(button) {
    const commentSection = button.parentElement.nextElementSibling;
    commentSection.style.display = commentSection.style.display === 'none' ? 'block' : 'none';
}

function addComment(button) {
    const input = button.previousElementSibling;
    const commentText = input.value;

    if (commentText.trim() === '') {
        alert('Comment cannot be empty!');
        return;
    }

    const commentElement = document.createElement('div');
    commentElement.textContent = commentText;
    commentElement.style.marginTop = '5px';

    const commentsContainer = button.nextElementSibling;
    commentsContainer.appendChild(commentElement);

    input.value = ''; // Clear input
}