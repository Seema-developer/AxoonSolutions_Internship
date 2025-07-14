fetch('https://jsonplaceholder.typicode.com/posts')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    let firstTenPosts = data.slice(0, 10);

    let postBox = document.getElementById('posts');

    firstTenPosts.forEach(function(post) {
      let card = document.createElement('div');
      card.className = 'post-card';
      card.innerHTML = '<h3>' + post.title + '</h3><p>' + post.body + '</p>';
      postBox.appendChild(card);
    });
  })
  .catch(function(error) {
    document.getElementById('error').textContent = "Something went wrong. Please try again.";
    console.log("Error:",error);
  });
