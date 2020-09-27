import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

// Reducers
import commitReducer from './CommitReducer';
import messageReducer from './MessagesReducer';
import repoReducer from './RepoReducer';

// Combine Reducers
export default combineReducers({
  form: formReducer,
  commitStore: commitReducer,
  repoStore: repoReducer,
  messageStore: messageReducer,
});
