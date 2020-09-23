import {GET_COMMITS_SUCCESS, CREATE_REPOSITORY_SUCCESS} from '../actions/ActionTypes';

const initialState = {
  commits: {},
  successMessage: false,
};

const commitReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMMITS_SUCCESS:
      return {
        ...state,
        commits: Object.values(action.payload),
      };
    case CREATE_REPOSITORY_SUCCESS: {
      return {...state, successMessage: action.payload.successMessage};
    }
    default:
      return state;
  }
};

export default commitReducer;
