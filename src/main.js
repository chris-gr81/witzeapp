import "./styles.scss";
import { getJoke } from "./api";
import { renderJoke } from "./ui";

const getJokeBtnEl = document.getElementById("getJokeBtn");
const currentJokeJokeEl = document.querySelector(".current-joke__joke");

document.addEventListener("DOMContentLoaded", () => {
  renderJoke(currentJokeJokeEl, "default");
});

getJokeBtnEl.addEventListener("click", async () => {
  const joke = await getJoke();
  renderJoke(currentJokeJokeEl, joke);
});
