import "./styles.scss";
import { getJoke, setLocal, getLocal, jokeList } from "./api";
import { renderJoke, renderSaveJokes } from "./ui";

const getJokeBtnEl = document.getElementById("getJokeBtn");
const saveJokeBtnEl = document.getElementById("saveJokeBtn");
const currentJokeJokeEl = document.querySelector(".current-joke__joke");

document.addEventListener("DOMContentLoaded", () => {
  renderJoke(saveJokeBtnEl, currentJokeJokeEl, "default");
  if (!getLocal()) return;
  getLocal().forEach((element) => {
    jokeList.push(element);
  });
  renderSaveJokes(getLocal());
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
  renderSaveJokes(getLocal());
});

function isDuplicate(currentJoke) {
  if (!getLocal()) return;

  const localList = getLocal();
  return localList.some((entry) => {
    return entry.joke === currentJoke;
  });
}
