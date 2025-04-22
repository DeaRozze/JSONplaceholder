export function getAllPosts(output) {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => {
      output.textContent = JSON.stringify(data, null, 2);
    });
}