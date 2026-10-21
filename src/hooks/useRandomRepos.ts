import { useEffect, useState } from "react";
import type { GithubRepo } from "../types";
import { fetchRandomRepos } from "../utils";

export function useRandomRepos(initialCount = 5, prependIntervalMs = 5000) {
  const [repos, setRepos] = useState<GithubRepo[]>([]);

  // Challenge #4: Test the error handling
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Challenge #3: Fetch initial random repos
  }, [initialCount]);

  useEffect(() => {
    // Challenge #3: Prepend a new random repo at the specified interval
  }, [prependIntervalMs]);

  return { repos };
}
