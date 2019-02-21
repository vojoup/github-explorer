import { GET_REPOS, GET_USER_INFO } from '../constants/github.constants';

const defaultState = {
  repos: [],
  user: null,
};

export default function githubReducer(state = defaultState, action) {
  switch (action.type) {
    case GET_REPOS: {
      return { ...state, repos: [...action.repos] };
    }
    case GET_USER_INFO:
      return { ...state, user: { ...action.user } };
    default:
      return { ...state };
  }
}
