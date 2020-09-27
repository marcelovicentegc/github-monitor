import {
  API_ERROR,
  CREATE_REPOSITORY_SUCCESS,
  GET_COMMITS_SUCCESS,
  SET_FILTERS,
} from './ActionTypes';

export const createRepositorySuccess = (response, successMessage) => ({
  type: CREATE_REPOSITORY_SUCCESS,
  payload: {response, successMessage},
});

export const getCommitsSuccess = commits => ({
  type: GET_COMMITS_SUCCESS,
  payload: commits,
});

export const apiError = errorMessage => ({
  type: API_ERROR,
  payload: {
    errorMessage,
  },
});

export const setFilters = filters => ({
  type: SET_FILTERS,
  payload: filters,
});
