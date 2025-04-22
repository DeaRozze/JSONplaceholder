export function updatePost(output) {
  fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      id: 1,
      title: "Обновленный заголовок",
      body: "Обновленное тело поста.",
      userId: 1,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      output.textContent = JSON.stringify(data, null, 2);
    });
}
