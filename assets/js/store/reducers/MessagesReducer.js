import {ERROR_MESSAGE, SUCCESS_MESSAGE} from '../../utils/store';

const initialState = {
  successMessage: '',
  errorMessage: '',
};

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS_MESSAGE: {
      return {...state, successMessage: action.payload, errorMessage: null};
    }
    case ERROR_MESSAGE: {
      return {...state, errorMessage: action.payload, successMessage: null};
    }
    default:
      return state;
  }
};

export default messageReducer;
