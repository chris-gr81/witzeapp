export function renderJoke(target, joke) {
  const saveBtnEl = document.getElementById("saveJokeBtn");
  if (joke === "default") {
    target.innerText = "Klicke auf den Button um einen Witz zu laden!";
    target.style.fontStyle = "italic";
    saveBtnEl.style.display = "none";
    return;
  }
  target.innerText = joke;
  target.style.fontStyle = "";
  saveBtnEl.style.display = "";
}
