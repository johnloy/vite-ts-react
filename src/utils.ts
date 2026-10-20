import type { GithubRepo } from "./types";

export function shuffle<T>(items: T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export async function fetchRandomRepos(count = 10): Promise<GithubRepo[]> {
  const res = await fetch("/repositories.json");

  if (!res.ok) {
    throw new Error(
      `Failed to load repositories: ${res.status} ${res.statusText}`,
    );
  }

  const repos: GithubRepo[] = await res.json();

  return shuffle(repos).slice(0, count);
}
