import {
  GET_COMMITS_SUCCESS,
  CREATE_REPOSITORY_SUCCESS,
  API_ERROR,
  SET_FILTERS,
} from '../actions/ActionTypes';

const initialState = {
  commits: {
    count: 0,
    current_page: 1,
    next: null,
    previous: null,
    results: [],
  },
  successMessage: '',
  errorMessage: '',
  filters: [],
};

const commitReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMMITS_SUCCESS:
      return {
        ...state,
        commits: action.payload,
      };
    case CREATE_REPOSITORY_SUCCESS: {
      return {...state, successMessage: action.payload.successMessage, errorMessage: null};
    }
    case API_ERROR: {
      return {...state, errorMessage: action.payload.errorMessage, successMessage: null};
    }
    case SET_FILTERS: {
      return {...state, filters: [...state.filters, action.payload]};
    }
    default:
      return state;
  }
};

export default commitReducer;
