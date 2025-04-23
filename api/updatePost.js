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
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Ошибка запроса: ${res.status} ${res.statusText}`);
      }
      return res.json();
    })
    .then((data) => {
      output.textContent = JSON.stringify(data, null, 2);
    })
    .catch((err) => {
      output.textContent = `Произошла ошибка: ${err.message}`;
    });
}
