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
        <button type="button" id="shuffle-button" onClick={shuffleList}>
          Shuffle Order
        </button>
        {error && (
          <p role="alert" className="two-thirds">
            {error}
          </p>
        )}
        <ReposList repos={listItems} />
      </section>
    </>
  );
}

export default App;
