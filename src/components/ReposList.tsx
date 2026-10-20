import type { GithubRepo } from "../types";

interface RepoListProps {
  repos: GithubRepo[];
}

export default function ReposList({ repos }: RepoListProps) {
  return (
    <ul id="repos-list" className="two-thirds">
      {repos.map((repo) => (
        <li key={repo.id}>
          <input type="checkbox" />{" "}
          <a href={repo.html_url} target="_blank" rel="noreferrer">
            {repo.full_name}
          </a>
          {repo.description && <span> - {repo.description}</span>}
        </li>
      ))}
    </ul>
  );
}
