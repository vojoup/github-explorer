import {
  GET_REPOS,
  GET_USER_INFO,
  LOADING_START,
} from '../constants/github.constants';

export const getUserInfo = user => async dispatch => {
  const response = await fetch(`https://api.github.com/users/${user}`);
  const userInfo = await response.json();
  dispatch({ type: GET_USER_INFO, user: userInfo, loading: false });
};

export const getAllReposForUser = user => async dispatch => {
  dispatch({ type: LOADING_START });
  dispatch(getUserInfo(user));
  const response = await fetch(`https://api.github.com/users/${user}/repos`);
  const repos = await response.json();
  dispatch({ type: GET_REPOS, repos, loading: false });
};

// https://api.github.com/repos/{owner}/{repo}
export const getRepoForUserByName = async (user, repoName) => {
  const response = await fetch(
    `https://api.github.com/repos/${user}/${repoName}`
  );
  const selectedRepo = await response.json();
  console.log(selectedRepo);
  return { type: GET_REPOS, selectedRepo, loading: false };
};
