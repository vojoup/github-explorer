import { GET_REPOS, GET_USER_INFO } from '../constants/github.constants';

export const getUserInfo = user => async dispatch => {
  const response = await fetch(`https://api.github.com/users/${user}`);
  const userInfo = await response.json();
  dispatch({ type: GET_USER_INFO, user: userInfo });
};

export const getAllReposForUser = user => async dispatch => {
  dispatch(getUserInfo(user));
  const response = await fetch(`https://api.github.com/users/${user}/repos`);
  const repos = await response.json();
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
