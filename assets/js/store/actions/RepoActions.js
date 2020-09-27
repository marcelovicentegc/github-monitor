/* eslint-disable import/prefer-default-export */
import {GET_REPOSITORIES} from '../../utils/store';

export const getRepositoriesAction = repos => ({
  type: GET_REPOSITORIES,
  payload: repos,
});
