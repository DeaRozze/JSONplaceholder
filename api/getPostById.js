export default function getPostById(output) {
  fetch("https://jsonplaceholder.typicode.com/posts/1")
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
