import {CREATE_REPOSITORY_SUCCESS, GET_COMMITS_SUCCESS} from './ActionTypes';

export const createRepositorySuccess = (response, successMessage) => ({
  type: CREATE_REPOSITORY_SUCCESS,
  payload: {response, successMessage},
});

export const getCommitsSuccess = commits => ({
  type: GET_COMMITS_SUCCESS,
  payload: commits,
});
