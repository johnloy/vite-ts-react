# Coding Challenges

1. Implement the logic to fetch [/repositories.json](./public/repositories.json) in the `fetchRandomRepos` util function. Throw an error in the case of a non-successful HTTP status.

2. Type the return value of `fetchRandomRepos`, knowing that the following properties of a repo will be used in the app.
    - `id`
    - `full_name`
    - `html_url`
    - `description` (might be `null`)

3. Implement a React hook that fetches 5 random repos and then prepends one additional repo to the returned `repos` value every 5 seconds. If an error occurs during fetching, it should be included in the return value of the hook.

4. Test the error handling of the hook to ensure the error message renders properly. Style it to be 2/3 the width of its container and horizontally centered.

5. Extract the repos list rendering into a separate React component named `ReposList`.

6. Style the repos list to left-align text, and also to be 2/3 the width of its container and horizontally centered. Style each list item to only occupy one line of text, truncated with an ellipsis.

7. Update the "Shuffle Order" button to shuffle the repos list.

8. Toggle the checkbox of some list items, identify the bug, and fix it.
