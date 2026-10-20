import { useEffect, useState } from "react";
import type { GithubRepo } from "../types";
import { fetchRandomRepos } from "../utils";

export function useRandomRepos(initialCount = 5, appendIntervalMs = 5000) {
  const [repos, setRepos] = useState<GithubRepo[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchRandomRepos(initialCount)
      .then(setRepos)
      .catch((e: Error) => setError(e.message));
  }, [initialCount]);

  useEffect(() => {
    const id = setInterval(() => {
      fetchRandomRepos(1)
        .then(([repo]) => {
          if (!repo) return;
          setRepos((prev) =>
            prev.some((r) => r.id === repo.id) ? prev : [repo, ...prev],
          );
        })
        .catch((e: Error) => setError(e.message));
    }, appendIntervalMs);
    return () => clearInterval(id);
  }, [appendIntervalMs]);

  return { repos, error };
}
