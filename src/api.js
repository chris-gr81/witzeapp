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
  jokeList.push({ joke });
  localStorage.setItem(STORAGE_KEY, JSON.stringify(jokeList));
}

export function getLocal() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY));
}
