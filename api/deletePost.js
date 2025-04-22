export default function deletePost(output) {
  fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "DELETE",
  }).then((res) => {
    output.textContent = `Статус удаления: ${res.status}`;
  });
}
