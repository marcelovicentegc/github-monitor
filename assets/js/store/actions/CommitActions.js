import {
  GET_COMMITS,
  GET_COMMITS_BY_AUTHOR,
  GET_COMMITS_BY_REPO,
  SET_FILTERS,
} from '../../utils/store';

export const getCommitsAction = commits => ({
  type: GET_COMMITS,
  payload: commits,
});

export const setFiltersAction = filters => {
  return {
    type: SET_FILTERS,
    payload: filters,
  };
};

export const getCommitsByRepoAction = commits => ({
  type: GET_COMMITS_BY_REPO,
  payload: commits,
});

export const getCommitsByAuthorAction = commits => ({
  type: GET_COMMITS_BY_AUTHOR,
  payload: commits,
});
