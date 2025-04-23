export async function createPost(output) {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: "Новый пост",
        body: "Это тело нового поста.",
        userId: 1,
      }),
    });
    if (!response.ok) {
      throw new Error(`Ошибка запроса: ${res.status} ${res.statusText}`);
    }
    const data = await response.json();
    output.textContent = JSON.stringify(data, null, 2);
  } catch (err) {
    output.textContent = `Произошла ошибка: ${err.message}`;
  }
}
