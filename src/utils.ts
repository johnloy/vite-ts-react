import type { GithubRepo } from "./types";

function shuffle<T>(items: T[]) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}


// Challenge #2: Type the return value
async function fetchRandomRepos(count = 10) {
  // Challenge #1: Fetch /repositories.json
  const repos = [];

  return shuffle(repos).slice(0, count);
}
