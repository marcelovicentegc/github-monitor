import {
  GET_COMMITS,
  GET_COMMITS_BY_AUTHOR,
  GET_COMMITS_BY_REPO,
  SET_FILTERS,
} from '../../utils/store';

const initialState = {
  commits: {
    count: 0,
    current_page: 1,
    next: null,
    previous: null,
    results: [],
  },
  filters: [],
};

const commitReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMMITS:
      return {
        ...state,
        commits: action.payload,
      };
    case GET_COMMITS_BY_REPO:
      return {
        ...state,
        commitsByRepo: action.payload,
      };
    case GET_COMMITS_BY_AUTHOR:
      return {
        ...state,
        commitsByAuthor: action.payload,
      };
    case SET_FILTERS: {
      return {...state, filters: action.payload};
    }
    default:
      return state;
  }
};

export default commitReducer;
