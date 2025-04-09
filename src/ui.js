import { deleteJoke } from "./api";

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

export function renderSaveJokes(jokeData) {
  const savedJokesListEl = document.querySelector(".saved-jokes__list");
  savedJokesListEl.innerHTML = "";

  jokeData.forEach((joke) => {
    const savedJokeEl = document.createElement("div");
    savedJokeEl.classList.add("saved-joke");
    savedJokeEl.innerHTML = `
        <div class="saved-joke__text">
          ${joke.joke}
        </div>
        <div class="saved-joke__remove">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="{1.5}"
            stroke="currentColor"
            class="saved-joke__symbol"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m3 3 1.664 1.664M21 21l-1.5-1.5m-5.485-1.242L12 17.25 4.5 21V8.742m.164-4.078a2.15 2.15 0 0 1 1.743-1.342 48.507 48.507 0 0 1 11.186 0c1.1.128 1.907 1.077 1.907 2.185V19.5M4.664 4.664 19.5 19.5"
            />
          </svg>
        </div>
      `;
    savedJokesListEl.prepend(savedJokeEl);
    const deleteEl = savedJokeEl.querySelector(".saved-joke__symbol");
    deleteEl.setAttribute("data-id", joke.id);
    deleteEl.addEventListener("click", () => {
      deleteJoke(joke.id);
    });
  });
}
