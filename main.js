// Function to post a new blog
function postBlog() {
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
  
    if (title && description) {
      const post = {
        title,
        description,
      };
  
      // Get existing blog posts from local storage
      const posts = JSON.parse(localStorage.getItem('blogPosts')) || [];
  
      // Add the new blog post
      posts.push(post);
  
      // Save the updated list of blog posts to local storage
      localStorage.setItem('blogPosts', JSON.stringify(posts));
  
      // Display the updated blog posts
      displayBlogPosts();
    } else {
      alert('Please enter both title and description.');
    }
  }
  
  // Function to display blog posts
  function displayBlogPosts() {
    const blogPostsContainer = document.getElementById('blog-posts');
    blogPostsContainer.innerHTML = ''; // Clear previous content
  
    // Get blog posts from local storage
    const posts = JSON.parse(localStorage.getItem('blogPosts')) || [];
  
    // Display each blog post
    posts.forEach((post, index) => {
      const postElement = document.createElement('div');
      postElement.innerHTML = `
        <div class="bg-white p-4 mb-4 border rounded-md">
          <h2 class="text-xl font-bold mb-2">${post.title}</h2>
          <p>${post.description}</p>
        </div>
      `;
      blogPostsContainer.appendChild(postElement);
    });
  }
  
  // Initial display of blog posts on page load
  displayBlogPosts();