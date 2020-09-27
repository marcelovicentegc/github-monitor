import {GET_COMMITS, SET_FILTERS} from '../../utils/store';

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
