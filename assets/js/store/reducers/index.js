import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

// Reducers
import commitReducer from './CommitReducer';

// Combine Reducers
export default combineReducers({
  form: formReducer,
  commitState: commitReducer,
});
