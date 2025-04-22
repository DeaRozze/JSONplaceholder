export function createPost(output) {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: "Новый пост",
      body: "Это тело нового поста.",
      userId: 1,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      output.textContent = JSON.stringify(data, null, 2);
    });
}
