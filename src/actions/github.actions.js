import { GET_REPOS, GET_REPO_BY_ID } from '../constants/github.constants';

export const getAllReposForUser = user => async dispatch => {
  const response = await fetch(`https://api.github.com/users/${user}/repos`);
  const repos = await response.json();
  console.log(repos);
  dispatch({ type: GET_REPOS, repos });
};

// https://api.github.com/repos/{owner}/{repo}
export const getRepoForUserByName = async (user, repoName) => {
  const response = await fetch(
    `https://api.github.com/repos/${user}/${repoName}`
  );
  const selectedRepo = await response.json();
  console.log(selectedRepo);
  return { type: GET_REPOS, selectedRepo };
};
