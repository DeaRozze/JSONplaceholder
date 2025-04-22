export function fetchMultiplePosts() {
  const ids = [1, 2, 3, 4, 5];
  const requests = ids.map((id) =>
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) =>
      res.json()
    )
  );
  return Promise.all(requests);
}

export function displayTitles(posts, titlesList) {
  titlesList.innerHTML = "";
  posts.forEach((post) => {
    const li = document.createElement("li");
    li.textContent = post.title;
    titlesList.appendChild(li);
  });
}
