async function getAPIJoke() {
  const response = await fetch(
    "https://witzapi.de/api/joke/?limit=1&language=de"
  );
  const body = await response.json();
  return body;
}

export async function getJoke() {
  const joke = await getAPIJoke();
  return joke[0].text;
}
