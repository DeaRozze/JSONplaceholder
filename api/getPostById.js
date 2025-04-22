export default function getPostById(output) {
  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((res) => res.json())
    .then((data) => {
      output.textContent = JSON.stringify(data, null, 2);
    });
}
