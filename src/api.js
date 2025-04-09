import { renderSaveJokes } from "./ui";

const API_ENDPOINT = "https://witzapi.de/api/joke/";
const STORAGE_KEY = "witzeapp";
export const jokeList = [];

async function getAPIJoke() {
  const response = await fetch(API_ENDPOINT);
  const body = await response.json();
  return body;
}

export async function getJoke() {
  const joke = await getAPIJoke();
  return joke[0].text;
}

export function setLocal(joke) {
  jokeList.push({ joke, id: createId() });
  localStorage.setItem(STORAGE_KEY, JSON.stringify(jokeList));
}

export function overwriteLocal(jokeList) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(jokeList));
}

export function getLocal() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY));
}

export function deleteJoke(id) {
  const newList = jokeList.filter((joke) => {
    return joke.id !== Number(id);
  });
  jokeList.length = 0;
  jokeList.push(...newList);
  overwriteLocal(jokeList);
  renderSaveJokes(jokeList);
}

function createId() {
  let counter = 1;
  const jokeList = getLocal() ?? [];

  const sortedList = jokeList
    .filter((joke) => {
      return joke && typeof joke.id === "number";
    })
    .sort((a, b) => {
      return a.id - b.id;
    });

  for (const joke of sortedList) {
    if (counter === joke.id) {
      counter++;
    } else {
      return counter;
    }
  }
  return counter;
}
