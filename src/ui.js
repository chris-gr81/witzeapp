export function renderJoke(button, target, joke) {
  if (joke === "default") {
    target.innerText = "Klicke auf den Button um einen Witz zu laden!";
    target.style.fontStyle = "italic";
    button.style.display = "none";
    return;
  }
  target.innerText = joke;
  target.style.fontStyle = "";
  button.style.display = "";
}
