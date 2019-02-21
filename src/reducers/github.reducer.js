import { GET_REPO_BY_ID, GET_REPOS } from '../constants/github.constants';

const defaultState = {
  repos: [],
  selectedRepo: null,
};

export default function githubReducer(state = defaultState, action) {
  switch (action.type) {
    case GET_REPOS: {
      return { ...state, repos: [...action.repos] };
    }
    default:
      return { ...state };
  }
}
