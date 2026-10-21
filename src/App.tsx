import githubLogo from "./assets/github.svg";
import ReposList from "./components/ReposList";
import { useRandomRepos } from "./hooks/useRandomRepos";
import { useShuffleList } from "./hooks/useShuffleList";

function App() {
  const { repos, error } = useRandomRepos(5, 5000);
  const { listItems, shuffleList } = useShuffleList(repos);

  return (
    <>
      <section id="hero">
        <img src={githubLogo} className="logo" alt="GitHub logo" />
        <h1>Random Github Repos</h1>
        <p>
          Edit files in <code>src/</code> and save to update with HMR.
        </p>
      </section>
      <section id="repos">
        {/* Challenge #7: Make this button shuffle the list of repositories */}
        <button type="button" id="shuffle-button">
          Shuffle Order
        </button>
        {/* Challenge #4: Test the error handling */}
        {error && (
          <p role="alert" className="two-thirds">
            {error}
          </p>
        )}
        {/* Challenge #5: Extract the list rendering into a separate component */}
        <ul id="repos-list">
          {listItems.map((repo) => (
            <li>
              <input type="checkbox" />{" "}
              <a href={repo.html_url} target="_blank" rel="noreferrer">
                {repo.full_name}
              </a>
              {repo.description && <span> - {repo.description}</span>}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default App;
