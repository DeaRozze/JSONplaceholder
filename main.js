import { getAllPosts } from "/api/getAllPosts.js";
import { createPost } from "/api/createPost.js";
import { updatePost } from "./api/updatePost.js";
import getPostById from "/api/getPostById.js";
import deletePost from "/api/deletePost.js";

const output = document.getElementById("output");
const titlesList = document.getElementById("titles");

document
  .getElementById("all-posts-btn")
  .addEventListener("click", () => getAllPosts(output));
document
  .getElementById("post-by-id-btn")
  .addEventListener("click", () => getPostById(output));
document
  .getElementById("create-post")
  .addEventListener("click", () => createPost(output));
document
  .getElementById("update-post")
  .addEventListener("click", () => updatePost(output));
document
  .getElementById("delete-post")
  .addEventListener("click", () => deletePost(output));

document.getElementById("titles-btn").addEventListener("click", async () => {
  const { fetchMultiplePosts, displayTitles } = await import("/api/titles.js");
  const posts = await fetchMultiplePosts();
  displayTitles(posts, titlesList);
});
