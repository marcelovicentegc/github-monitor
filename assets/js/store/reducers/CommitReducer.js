import {GET_COMMITS_SUCCESS, CREATE_REPOSITORY_SUCCESS} from '../actions/ActionTypes';

const initialState = {
  commits: {
    count: 0,
    current_page: 1,
    next: null,
    previous: null,
    results: [],
  },
  successMessage: false,
};

const commitReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMMITS_SUCCESS:
      return {
        ...state,
        commits: action.payload,
      };
    case CREATE_REPOSITORY_SUCCESS: {
      return {...state, successMessage: action.payload.successMessage};
    }
    default:
      return state;
  }
};

export default commitReducer;
