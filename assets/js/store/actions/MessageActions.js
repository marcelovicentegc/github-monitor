import {ERROR_MESSAGE, SUCCESS_MESSAGE} from '../../utils/store';

export const setErrorMessageAction = errorMessage => ({
  type: ERROR_MESSAGE,
  payload: errorMessage,
});

export const setSuccessMessageAction = successMessage => ({
  type: SUCCESS_MESSAGE,
  payload: successMessage,
});
