import {
  GET_REPOS,
  GET_USER_INFO,
  LOADING_START,
} from '../constants/github.constants';

const defaultState = {
  repos: [],
  user: null,
  loading: false,
};

export default function githubReducer(state = defaultState, action) {
  switch (action.type) {
    case GET_REPOS: {
      return { ...state, repos: [...action.repos], loading: action.loading };
    }
    case GET_USER_INFO:
      return { ...state, user: { ...action.user }, loading: action.loading };
    case LOADING_START:
      return { ...state, loading: true };
    default:
      return { ...state };
  }
}
