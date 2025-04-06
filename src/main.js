import "./styles.scss";
import { getJoke, setLocal, getLocal } from "./api";
import { renderJoke } from "./ui";

const getJokeBtnEl = document.getElementById("getJokeBtn");
const saveJokeBtnEl = document.getElementById("saveJokeBtn");
const currentJokeJokeEl = document.querySelector(".current-joke__joke");

document.addEventListener("DOMContentLoaded", () => {
  renderJoke(saveJokeBtnEl, currentJokeJokeEl, "default");
});

getJokeBtnEl.addEventListener("click", async () => {
  const joke = await getJoke();
  renderJoke(saveJokeBtnEl, currentJokeJokeEl, joke);
});

saveJokeBtnEl.addEventListener("click", () => {
  if (isDuplicate(currentJokeJokeEl.innerText)) {
    alert("Dieser Witz wurde schon abgespeichert!");
    return;
  }
  setLocal(currentJokeJokeEl.innerText);
  console.log(getLocal());
});

function isDuplicate(currentJoke) {
  const localList = getLocal();
  return localList.some((entry) => {
    return entry.joke === currentJoke;
  });
}
